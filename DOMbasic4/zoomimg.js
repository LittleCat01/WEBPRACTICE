let img = document.getElementById("img");
let title = document.getElementById("title");

title.onmouseenter = function () {
  img.classList.add("show");
};

title.onmouseleave = function () {
  img.classList.remove("show");
};
