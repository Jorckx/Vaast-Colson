<template>
  <main v-if="unlock == key" id="main" data-id="activated">
    <span v-if="title == 'and on and on'" class="vaastcolson"
      >and on and on</span
    >
    <span v-else class="vaastcolson">{{ title }}</span>
    <h1 class="andonandonandon" id="andonandonandon">
      <span class="andonandonandon-input">&nbsp;And on and on</span>
      <!-- duplicate above, change style to allow continous scroll -->
      <span class="andonandonandon-input2">&nbsp;And on and on&nbsp;</span>
    </h1>
    <Infofield />
  </main>
  <main v-else id="main" data-id="notactivated">
    <h1 @mouseover="showForm" @click="showForm" @mouseout="hideForm">{{ title }}</h1>
    <form @submit.prevent="submit" id="form">
      <div v-if="posts.voucher == 'ee2e2'">
        <label class="correct" for="voucherfield"
          >correct! Enter to register the voucher and activate the
          artwork.</label
        >
        <input type="text" id="date" name="date" :value="posts.date" hidden />
        <input type="text" id="time" name="time" :value="posts.time" hidden />
        <input type="submit" label="submit" hidden />
      </div>
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
    </form>
  </main>
</template>

<script>
import axios from "axios";
import { DateTime } from "luxon";

export default {
  name: "IndexPage",
  data() {
    const d = new Date();
    return {
      key: "ee2e2",
      title: "Vaast Colson",
      unlock: "",
      posts: {
        voucher: "",
        date: DateTime.now().toISODate(),
        time:
          d.getHours() + "h " + d.getMinutes() + "m " + d.getSeconds() + "s",
      },
    };
  },

  methods: {
    findKey() {
      const csrf = "<?= csrf() ?>";
      axios
        .get("https://t-e-a.gent/vouchers.json", {})
        .then((result) => {
          //this.title = result.data.voucher;
          //this.unlock = result.data.data.submissions[0].code;
          console.log(result);
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
          .post("https://getform.io/f/8f62d2c7-91c7-4429-a368-3dfece0cf361", {
            message: "and on and on",
            date: date,
            time: time,
            code: voucher,
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
