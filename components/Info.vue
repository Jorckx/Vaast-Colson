<template>
  <div>
    <div id="ghost" class="ghost"></div>
    <ul id="ref" class="info" :key="info">
      <li>Produced on 23-5-2022</li>
      <li>Activated on {{ date }} {{ time }}</li>
      <li>Time since activation: {{ passed }}</li>
      <li>
        <br />
        <i>
          “As the present makes way for the future, it leaves us with a past.”
        </i>
        <br />
        — Vaast E.M. Colson
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import { DateTime } from "luxon";

export default {
  data() {
    return {
      date: "",
      time: "",
      passed: "",
    };
  },
  methods: {
    setInfo() {
      axios
        .get("https://sheetdb.io/api/v1/r9lk45w70gis2/search?voucher=ee2e2")
        .then((result) => {
          var end = DateTime.now().toLocaleString();
          var start = result.data[0].date;
          console.log(start, end);
          var diffInDays = end.diff(start, "days");

          this.date = result.data[0].date;
          this.time = result.data[0].time;
          this.passed = diffInDays.toObject();
          console.log(result.data[0].voucher);
        })
        .catch((error) => console.warn(error));
    },
  },
  created() {
    this.setInfo();
  },
  mounted() {
    const ref = document.getElementById("ref");
    const ghost = document.getElementById("ghost");
    //window.addEventListener("mousemove", function (e) {
    //  let left = e.clientX;
    //  let top = e.clientY;
    //  ref.style.left = left + "px";
    //  ref.style.top = top + "px";
    //});
    //const ghost = document.getElementById("ghost");
    ghost.addEventListener("mousemove", () => {
      ref.classList.add("show");
    });
    ghost.addEventListener("mouseout", () => {
      ref.classList.remove("show");
    });
  },
};
</script>
