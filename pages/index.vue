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
  transition(to, from) {
    if (!from) {
      return "slide-left";
    }
    return +to.query.page < +from.query.page ? "slide-right" : "slide-left";
  },
};
</script>

<style></style>
