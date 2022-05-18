<template>
  <main v-if="voucher == 'true'" id="main" data-id="activated">
    <h1 class="andonandonandon" id="andonandonandon">
      <span class="andonandonandon-input">&nbsp;And on and on and on </span>
      <!-- duplicate above, change style to allow continous scroll -->
      <span class="andonandonandon-input2"
        >&nbsp;And on and on and on&nbsp;</span
      >
    </h1>
    <div class="time"></div>
    <p id="ref" class="info" :key="info">info</p>
  </main>
  <main v-else id="main" data-id="notactivated">
    <h1 @mouseover="showForm" @mouseout="hideForm">{{ title }}</h1>
    <form action="submit" method="post" id="form">
      <textarea
        id="voucherField"
        v-model="voucherInput"
        oninput="this.value = this.value.replace(/\n/g,'')"
        @click="clearText"
        placeholder="|"
      ></textarea>
      <button id="submit">submit</button>
    </form>
  </main>
</template>

<script>
export default {
  setup() {
    AOS.init();
    return {
      page: usePage(),
    };
  },
  data() {
    return {
      title: "Vaast Colson",
      voucher: "",
    };
  },
  methods: {
    clearText() {
      const text = document.getElementById("voucherField");
      text.placeholder = " ";
    },
    showForm() {
      const form = document.getElementById("form");
      form.classList.add("show");
    },
    hideForm() {
      const form = document.getElementById("form");
      form.classList.remove("show");
    },
  },
  mounted() {
    let ref = document.getElementById("ref");
    window.addEventListener("mousemove", function (e) {
      let left = e.clientX;
      let top = e.clientY;
      ref.style.opacity = 1;
      ref.style.left = left + "px";
      ref.style.top = top + "px";
    });
    window.addEventListener("mouseout", () => {
      ref.style.opacity = 0;
    });

    const main = document.getElementById("main");
    if (main.getAttribute("data-id") == "notactivated") {
      const text = document.getElementById("voucherField");
      const button = document.getElementById("submit");
      if (text.value == "") {
        button.style.visibility = "hidden";
      } else {
        button.style.visibility = "visible";
      }
    } else {
    }
  },
};
</script>

<style>
/*info*/
.info {
  opacity: 0;
  transition: opacity 0.5s;
  background-color: white;
  color: black;
  padding: 0em 0.5em;
  position: absolute;
  box-shadow: 1px 1px 5px black;
}
.info:hover {
  cursor: none;
}
</style>
