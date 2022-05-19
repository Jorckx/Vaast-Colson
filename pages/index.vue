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
};
</script>

<style></style>
