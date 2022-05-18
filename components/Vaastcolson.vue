<template>
  <main id="main" data-id="notactivated">
    <h1 @mouseover="showForm" @mouseout="hideForm">{{ title }}</h1>
    <form @submit.prevent="postData" id="form">
      <input
        id="voucherField"
        name="voucher"
        class="voucherField"
        oninput="this.value = this.value.replace(/\n/g,'')"
        type="text"
      />

      <div v-if="posts.voucher == 'ee2e2'">
        <label for="voucherfield">correct!</label>
        <input type="text" id="date" name="date" :value="posts.date" hidden />
        <input type="text" id="time" name="time" :value="posts.ime" hidden />
        <input type="submit" label="submit" hidden />
      </div>
      <label v-else for="voucherfield"></label>
    </form>
  </main>
</template>

<script>
export default {
  name: "addVoucher",

  data() {
    const d = new Date();
    return {
      title: "Vaast Colson",
      posts: {
        voucher: null,
        date: d.toISOString().substr(0, 10),
        time:
          d.getHours() + "h " + d.getMinutes() + "m " + d.getSeconds() + "s",
      },
    };
  },
  methods: {
    postData() {
      this.axios
        .post("http://localhost:3000/posts/", this.posts)
        .then((result) => {
          console.warn(result);
        });
      e.preventDefault();
    },
    showForm() {
      const text = document.getElementById("voucherField");
      const form = document.getElementById("form");
      form.classList.add("show");
      text.focus();
    },
    hideForm() {
      const text = document.getElementById("voucherField");
      const form = document.getElementById("form");
      form.classList.remove("show");
      text.blur();
    },
  },
  mounted() {},
};
</script>
<style>
main {
  cursor: auto;
}
</style>
