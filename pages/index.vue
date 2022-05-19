<template>
  <Activated v-if="voucher == 'true'" />
  <Vaastcolson v-else />
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      title: "Vaast Colson",
      voucher: "",
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
