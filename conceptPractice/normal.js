console.log("External script executed");

const el = document.querySelector("#container p:last-child");

if (el) {
  el.style.color = "red";
  console.log("DOM READY ✅");
} else {
  console.log("DOM NOT READY ❌");
}
