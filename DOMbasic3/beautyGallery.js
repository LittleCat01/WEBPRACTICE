// 第一次写的代码，很明显，写的很呆板
// let bcg = document.getElementById("bcg");

// let bip = document.getElementById("bip");

// let smp1 = document.getElementById("smp1");
// let smp2 = document.getElementById("smp2");
// let smp3 = document.getElementById("smp3");
// let smp4 = document.getElementById("smp4");
// let smp5 = document.getElementById("smp5");

// smp1.onclick = function () {
//   bip.src = smp1.src;
// };

// smp2.onclick = function () {
//   bip.src = smp2.src;
// };

// smp3.onclick = function () {
//   bip.src = smp3.src;
// };

// smp4.onclick = function () {
//   bip.src = smp4.src;
// };

// smp5.onclick = function () {
//   bip.src = smp5.src;
// };

// window.onload = function () {
//   bip.src = "../assets/jennie/G03msGjbEAAwSNF.jpg";
// };

// 这里学习一下高效的写法,这个用的是数组循环,还有选择器的知识

// let bip = document.getElementById("bip");
// let smps = document.querySelectorAll(".smp");

// smps.forEach(function (smp) {
//   smp.onclick = function () {
//     bip.src = this.src;
//   };
// });

// 这里再来一个高级一点的,事件委托,冒泡
// let bip = document.getElementById("bip");
// let container = document.querySelector(".smallPicture");

// container.addEventListener("click", function (img) {
//   if (img.target.tagName === "IMG") {
//     bip.src = img.target.src;
//   }
// });

// 再精致一点,给点击的小图增加一个选中效果
let bip = document.getElementById("bip");
let container = document.querySelector(".smallPicture");

let smps = document.querySelectorAll(".smp");

container.addEventListener("click", function (img) {
  if (img.target.tagName === "IMG") {
    bip.src = img.target.src;
    smps.forEach(function (smp) {
      smp.classList.remove("active");
    });
    img.target.classList.add("active");
  }
});
