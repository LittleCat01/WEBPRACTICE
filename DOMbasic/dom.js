var button = document.getElementById("button");
var box = document.getElementById("box");

button.onclick = function () {
  if (this.innerHTML === "hide") {
    box.classList.add("hidden");
    this.innerHTML = "show";
  } else {
    box.classList.remove("hidden");
    this.innerHTML = "hide";
  }
};
