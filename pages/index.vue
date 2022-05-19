<template>
  <Activated v-if="correct == 'true'" />
  <Vaastcolson v-else />
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      title: "Vaast Colson",
      correct: "",
    };
  },
};
</script>

<style></style>
