<template>
  <div>
  </div>
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
    changeName() {
      this.$emit("changename", "true");
    },
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
