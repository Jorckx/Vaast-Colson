<template>
  <main>
    <h1>posts</h1>
  </main>
</template>

<script>
import axios from "axios";
/* eslint disable */
export default {
  data() {
    return {
      vouchers: [],
    };
  },
  mounted() {
    axios.get();
  },
};
</script>
