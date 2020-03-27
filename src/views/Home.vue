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
            <v-date-picker v-model="date" full-width locale="es-sp" :min="minimum" :max="maximum"></v-date-picker>
          </v-card>
          <v-card color="error" dark>
            <v-card-text class="display-1 text-center">
              $: {{ date }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      date: "",
      minimum: "1999",
      maximum: new Date().toISOString().substr(0,10)
    };
  }
};
</script>
