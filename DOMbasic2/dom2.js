var box1 = document.getElementById("box1");

var changecolor1 = function () {
  if (box1.style.backgroundColor === "violet") {
    box1.style.backgroundColor = "blue";
    box1.innerHTML = "box1 blue";
  } else {
    box1.style.backgroundColor = "violet";
    box1.innerHTML = "box1 violet";
  }
};
var changecolor2 = function () {
  if (box1.style.backgroundColor === "violet") {
    box1.style.backgroundColor = "green";
    box1.innerHTML = "box1 green";
  } else {
    box1.style.backgroundColor = "violet";
    box1.innerHTML = "box1 violet";
  }
};

box1.onclick = changecolor1;

box1.ondblclick = changecolor2;

box1.onmouseover = changecolor1;

box1.onmouseout = changecolor2;
