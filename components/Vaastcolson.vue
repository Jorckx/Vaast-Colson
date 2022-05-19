<template>
  <main id="main" data-id="notactivated">
    <h1 @mouseover="showForm" @mouseout="hideForm">{{ title }}</h1>
    <form id="form" method="post">
      <input
        id="voucherField"
        name="voucher"
        class="voucherField"
        oninput="this.value = this.value.replace(/\n/g,'')"
        type="text"
        @keyup.enter="postData"
      />

      <div v-if="form.voucher == 'ee2e2'">
        <label for="voucherfield">correct!</label>
        <input type="text" id="date" name="date" :value="form.date" hidden />
        <input type="text" id="time" name="time" :value="form.time" hidden />
        <input type="submit" label="submit" hidden />
      </div>
      <label v-else for="voucherfield"></label>
    </form>
  </main>
</template>

<script>
import axios from "axios";
const baseUrl = "http://localhost:3000/forms/";
export default {
  name: "addVoucher",
  data() {
    const d = new Date();
    return {
      title: "Vaast Colson",
      form: {
        voucher: null,
        date: d.toISOString().substr(0, 10),
        time:
          d.getHours() + "h " + d.getMinutes() + "m " + d.getSeconds() + "s",
      },
    };
  },
  methods: {
    async addVoucher(e) {
      const res = await axios.post(baseUrl, this.form).then((result) => {
        console.warn(result);
      });
      e.preventDefault();
    },
    postData(e) {
      this.axios
        .post("http://localhost:3000/form/", this.form)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
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
