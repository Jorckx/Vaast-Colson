<template>
  <main v-if="posts.code == 'true'" id="main" data-id="activated">
    <span class="vaastcolson">Vaast Colson</span>
    <h1 class="andonandonandon" id="andonandonandon">
      <span class="andonandonandon-input">&nbsp;And on and on </span>
      <!-- duplicate above, change style to allow continous scroll -->
      <span class="andonandonandon-input2">&nbsp;And on and on&nbsp;</span>
    </h1>
    <Info />
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
        v-model="posts.code"
        autocomplete="off"
        required
      />
      <div v-if="posts.code == 'ee2e2'">
        <label for="voucherfield">correct!</label>
        <input type="text" id="date" name="date" :value="posts.date" hidden />
        <input type="text" id="time" name="time" :value="posts.time" hidden />
        <input type="submit" label="submit" hidden />
      </div>
    </form>
    <h2>{{ array.length }}</h2>
  </main>
</template>

<script>
import axios from "axios";
export default {
  name: "IndexPage",
  data() {
    const d = new Date();
    return {
      array: [],
      title: "Vaast Colson",
      voucher: "",
      posts: {
        code: "",
        date: d.toISOString().substr(0, 10),
        time:
          d.getHours() + "h " + d.getMinutes() + "m " + d.getSeconds() + "s",
      },
    };
  },
  computed: {
    getCorrect() {},
  },
  methods: {
    findItems() {
      axios
        .get("https://getform.io/f/8f62d2c7-91c7-4429-a368-3dfece0cf361")
        .then(function (response) {
          console.log(response);
          this.itemArray = response;
        });
    },
    submit(event) {
      const { voucher, date, time } = Object.fromEntries(
        new FormData(event.target)
      );
      this.voucher = voucher;
      this.date = date;
      this.time = time;
      console.log(voucher, date, time);
      if (voucher == "ee2e2") {
        axios
          .post("https://getform.io/f/8f62d2c7-91c7-4429-a368-3dfece0cf361", {
            message: voucher,
            date: date,
            time: time,
          })
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
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
  mounted() {
    this.findItems();
  },
};
</script>

<style></style>
