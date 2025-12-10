var tab1 = document.getElementById("tab1");
var tab2 = document.getElementById("tab2");
var tab3 = document.getElementById("tab3");
var tab4 = document.getElementById("tab4");

var content1 = document.getElementById("content1");
var content2 = document.getElementById("content2");
var content3 = document.getElementById("content3");
var content4 = document.getElementById("content4");

window.onload = function () {
  tab1.style.color = "black";
  content1.style.display = "block";
  content2.style.display = "none";
  content3.style.display = "none";
  content4.style.display = "none";
};

tab1.onclick = function () {
  tab1.style.color = "black";
  tab2.style.color = "rgb(158, 158, 158)";
  tab3.style.color = "rgb(158, 158, 158)";
  tab4.style.color = "rgb(158, 158, 158)";

  content1.style.display = "block";

  content2.style.display = "none";
  content3.style.display = "none";
  content4.style.display = "none";
};
tab2.onclick = function () {
  tab1.style.color = "rgb(158, 158, 158)";
  tab2.style.color = "black";
  tab3.style.color = "rgb(158, 158, 158)";
  tab1.style.color = "rgb(158, 158, 158)";

  content2.style.display = "block";

  content1.style.display = "none";
  content3.style.display = "none";
  content4.style.display = "none";
};
tab3.onclick = function () {
  tab1.style.color = "rgb(158, 158, 158)";
  tab2.style.color = "rgb(158, 158, 158)";
  tab3.style.color = "black";
  tab4.style.color = "rgb(158, 158, 158)";

  content3.style.display = "block";

  content1.style.display = "none";
  content2.style.display = "none";
  content4.style.display = "none";
};

tab4.onclick = function () {
  tab1.style.color = "rgb(158, 158, 158)";
  tab2.style.color = "rgb(158, 158, 158)";
  tab3.style.color = "rgb(158, 158, 158)";
  tab4.style.color = "black";

  content4.style.display = "block";

  content1.style.display = "none";
  content2.style.display = "none";
  content3.style.display = "none";
};
