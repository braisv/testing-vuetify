<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
      style="display:block;margin: 0 auto"
    />
    <v-container>
      <v-row>
        <v-col class="col-12">
          <v-card>
            <v-date-picker
              v-model="date"
              full-width
              locale="es-sp"
              :min="minimum"
              :max="maximum"
              @change="getDolar(date)"
            ></v-date-picker>
          </v-card>
          <v-card color="error" dark>
            <v-card-text class="display-1 text-center">
              {{ value }}€: {{ date }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      minimum: "1999",
      maximum: new Date().toISOString().substr(0, 10),
      value: null
    };
  },
  methods: {
    async getDolar(date) {
      let sortedDay = date.split('-').reverse().join('-')
      console.log('SORTED DAY: ', sortedDay)
      console.log("AXIOS: ", axios);
      let data = await axios.get(`https://mindicador.cl/api/euro/${sortedDay}`);
      console.log("DATA: ", data.data.serie[0].valor);
      this.value = await data.data.serie[0].valor;
    }
  },
  created() {
    this.getDolar(this.date);
  }
};
</script>
