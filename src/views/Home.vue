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
              {{ value }}{{ typeof value === "number" ? "€" : "" }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import { mapMutations } from 'vuex';

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
    ...mapMutations(['showLoading', 'hideLoading']),
    async getDolar(date) {
      let sortedDay = date
        .split("-")
        .reverse()
        .join("-");
      try {
        this.showLoading({ title: 'Getting info...', color: 'secondary' })
        let data = await axios.get(
          `https://mindicador.cl/api/euro/${sortedDay}`
        );

        data.data.serie.length > 0
          ? (this.value = await data.data.serie[0].valor)
          : (this.value = "No info on weekend");
      } catch (err) {
        console.log(err);
      } finally {
        console.log('finally')
        this.hideLoading()
      }
    }
  },
  created() {
    this.getDolar(this.date);
  }
};
</script>
