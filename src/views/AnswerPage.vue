<template>
  <div>
    <router-link to="/">Back</router-link>
    <h1>{{ answer }}</h1>
  </div>
</template>

<script>
import cookies from "vue-cookies";
export default {
  data() {
    return {
      answer: 0,
    };
  },
  mounted() {
    if (cookies.get(`answer`) !== null) {
      this.answer = cookies.get(`answer`);
    } else {
      alert(
        `Sorry. There was an error. Back to the other page and click the button`
      );
    }
  },
};
</script>

<style scoped></style>
