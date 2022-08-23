<template>
  <div>
    <button @click="handle_click">Click me</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  methods: {
    handle_click() {
      axios
        .request({
          url: `https://x-math.herokuapp.com/api/random`,
        })
        .then((response) => {
          cookies.set(`answer`, response[`data`][`answer`]);
          cookies.set(`expression`, response[`data`][`expression`]);
          this.$router.push(`/answer`);
        })
        .catch((error) => {
          error;
        });
    },
  },
};
</script>

<style scoped></style>
