<template>
  <main id="main" data-id="notactivated">
    <h1 @mouseover="showForm" @mouseout="hideForm">{{ title }}</h1>
    <form @submit.prevent="submit" id="form">
      <input
        id="voucherField"
        name="voucher"
        class="voucherField"
        oninput="this.value = this.value.replace(/\n/g,'')"
        type="text"
        @keyup.enter="postData"
      />

      <div v-if="posts.voucher == 'ee2e2'">
        <label for="voucherfield">correct!</label>
      </div>
      <div v-else for="voucherfield">
        <input type="text" id="date" name="date" :value="posts.date" hidden />
        <input type="text" id="time" name="time" :value="posts.time" hidden />
        <input type="submit" label="submit" hidden />
      </div>
    </form>
  </main>
</template>

<script>
//const express = require("express");
//const Datastore = require("nedb");
//const app = express();
//app.listen(3000, () => console.log("listening at 3000"));
//app.use(express.static("public"));
//app.use(express.json({ limit: "1mb" }));
//
//const database = new Datastore("voucher.db");
//database.loadDatabase();

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
    submit(event) {
      const { voucher, date, time } = Object.fromEntries(
        new FormData(event.target)
      );
      this.voucher = voucher;
      this.date = date;
      this.time = time;
      console.log(voucher, date, time);
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
