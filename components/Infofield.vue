<template>
  <div>
    <div id="ghost" class="ghost"></div>
    <ul id="ref" class="info">
      <li>Produced on 23-5-2022 at PLUS-ONE Gallery</li>
      <li>Activated on {{ date }} {{ time }}</li>
      <li>Days since activation: {{ passed }}</li>
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
        .get(
          "https://api.getform.io/v1/forms/8f62d2c7-91c7-4429-a368-3dfece0cf361?token=4ysIDVAlczcM5PuB7ryNSauSMmXii5dKRAlW3RMKRJ7hnqC5Ry70KrC17B1V"
        )
        .then((result) => {
          this.date = result.data.data.submissions[0].date;
          this.time = result.data.data.submissions[0].time;
          var date1 = new Date("7-11-2010");
          var date2 = new Date("12-12-2010");
          var timeDiff = Math.abs(date2.getTime() - date1.getTime());
          var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
          this.passed = diffDays;
        })
        .catch((error) => console.warn(error));
    },
    //calculate() {
    //},
  },
  created() {
    this.setInfo();
    //this.calculate();
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
