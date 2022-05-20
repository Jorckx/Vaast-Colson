<template>
  <ul id="ref" class="info" :key="info">
    <li>Produced on 19/05/2022</li>
    <li>Activated on 23/05/2022 10:30(:30s)pm</li>
    <li>Time since activation: 12d:23m:23s</li>
    <li>
      <br />
      <i>
        “As the present makes way for the future, it leaves us with a past.”
      </i>
      <br />
      — Vaast E.M. Colson
    </li>
  </ul>
</template>

<script>
export default {
  mounted() {
    this.findItems();

    const ref = document.getElementById("ref");
    window.addEventListener("mousemove", function (e) {
      let left = e.clientX;
      let top = e.clientY;
      ref.style.left = left + "px";
      ref.style.top = top + "px";
    });
    const ghost = document.getElementById("ghost");
    window.addEventListener("mousemove", () => {
      ref.classList.add("show");
    });
    window.addEventListener("mouseout", () => {
      ref.classList.remove("show");
    });
  },
};
</script>
