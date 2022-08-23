<template>
  <div>
    <router-link to="/">Back</router-link>
    <h1>{{ expression }}</h1>
    <h2>{{ answer }}</h2>
  </div>
</template>

<script>
import cookies from "vue-cookies";
export default {
  data() {
    return {
      answer: 0,
      expression: 0,
    };
  },
  mounted() {
    if (cookies.get(`answer`) !== null && cookies.get(`expression`)) {
      this.answer = cookies.get(`answer`);
      this.expression = cookies.get(`expression`);
    } else {
      alert(
        `Sorry. There was an error. Back to the other page and click the button`
      );
    }
  },
};
</script>

<style scoped></style>
