// 通过dom获取事件源
let button = document.getElementById("but");
let output = document.getElementById("pra");

// 函数1：控制带显示点击次数
let i = 0;

function count() {
  i = i + 1;
  console.log("press on " + i + " times");
}

// 函数2：改变段落内容
function countOutput() {
  i = i + 1;
  output.innerHTML = "press on " + i + " times";
}

// 函数3：改变段落属性
function changeColor() {
  if (output.style.backgroundColor === "rgb(52, 149, 235)") {
    output.style.backgroundColor = "violet";
  } else {
    output.style.backgroundColor = "rgb(52, 149, 235)";
  }
}

// 绑定事件
// button.onclick = changeColor;

// 事件监听
button.addEventListener("click", changeColor);
button.addEventListener("click", countOutput);
button.removeEventListener("click", changeColor);
