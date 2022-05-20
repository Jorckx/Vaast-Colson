<template>
  <main v-if="unlock == key" id="main" data-id="activated">
    <span v-if="title == 'and on and on'" class="vaastcolson">{{ andon }}</span>
    <span v-else class="vaastcolson">{{ title }}</span>
    <h1 class="andonandonandon" id="andonandonandon">
      <span class="andonandonandon-input">&nbsp;And on and on</span>
      <!-- duplicate above, change style to allow continous scroll -->
      <span class="andonandonandon-input2">&nbsp;And on and on&nbsp;</span>
    </h1>
    <Info />
    <h2>{{ unlock }}</h2>
  </main>
  <main v-else id="main" data-id="notactivated">
    <h1 @mouseover="showForm" @mouseout="hideForm">{{ title }}</h1>
    <form @submit.prevent="submit" id="form">
      <input
        id="voucherField"
        name="voucher"
        class="voucherField"
        oninput="this.value = this.value.replace(/\n/g,'')"
        type="text"
        v-model="posts.voucher"
        autocomplete="off"
        required
      />
      <div v-if="posts.voucher == 'ee2e2'">
        <label for="voucherfield">correct!</label>
        <input type="text" id="date" name="date" :value="posts.date" hidden />
        <input type="text" id="time" name="time" :value="posts.time" hidden />
        <input type="submit" label="submit" hidden />
      </div>
    </form>
    <h2>{{ unlock }}</h2>
  </main>
</template>

<script>
import axios from "axios";
import SheetDB from "sheetdb-js";

export default {
  name: "IndexPage",
  data() {
    const d = new Date();
    return {
      key: "ee2e2",
      title: "Vaast Colson",
      unlock: "",
      andon: "and on and on",
      posts: {
        voucher: "",
        date: d.getDate(),
        time:
          d.getHours() + "h " + d.getMinutes() + "m " + d.getSeconds() + "s",
      },
    };
  },

  methods: {
    findKey() {
      axios
        .get("https://sheetdb.io/api/v1/r9lk45w70gis2/search?voucher=ee2e2")
        .then((result) => {
          this.unlock = result.data[0].voucher;
          console.log(result.data[0].voucher);
        })
        .catch((error) => console.warn(error));
      axios
        .get(
          "https://sheetdb.io/api/v1/r9lk45w70gis2/search?voucher=and%20on%20and%20on"
        )
        .then((result) => {
          this.title = result.data[0].voucher;
          console.log(result.data[0].voucher);
        })
        .catch((error) => console.warn(error));
    },
    submit(event) {
      const { voucher, date, time } = Object.fromEntries(
        new FormData(event.target)
      );
      console.log(voucher, date, time);
      if (voucher == this.key) {
        this.unlock = this.key;
        axios
          .post("https://sheetdb.io/api/v1/r9lk45w70gis2", {
            data: {
              voucher: voucher,
              date: date,
              time: time,
            },
          })
          .then((response) => console.log(response))
          .catch((error) => console.warn(error));
        axios
          .post("https://sheetdb.io/api/v1/r9lk45w70gis2", {
            data: {
              voucher: "and on and on",
              date: "",
              time: "",
            },
          })
          .then((response) => console.log(response))
          .catch((error) => console.warn(error));
      } else {
      }
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
  created() {
    this.findKey();
  },
  mounted() {
    const main = document.getElementById("main");
    setTimeout(() => {
      main.style.opacity = "1";
    }, "1000");
  },
};
</script>

<style></style>
