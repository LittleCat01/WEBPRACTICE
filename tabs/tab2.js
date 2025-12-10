// 初级写法;
// let tab1 = document.getElementById("tab1");
// let tab2 = document.getElementById("tab2");
// let tab3 = document.getElementById("tab3");
// let tab4 = document.getElementById("tab4");

// let art1 = document.getElementById("artical1");
// let art2 = document.getElementById("artical2");
// let art3 = document.getElementById("artical3");
// let art4 = document.getElementById("artical4");

// tab1.onclick = function () {
//   tab2.classList.remove("select");
//   art2.classList.remove("show");

//   tab3.classList.remove("select");
//   art3.classList.remove("show");

//   tab4.classList.remove("select");
//   art4.classList.remove("show");

//   tab1.classList.add("select");
//   art1.classList.add("show");
// };

// tab2.onclick = function () {
//   tab1.classList.remove("select");
//   art1.classList.remove("show");

//   tab3.classList.remove("select");
//   art3.classList.remove("show");

//   tab4.classList.remove("select");
//   art4.classList.remove("show");

//   tab2.classList.add("select");
//   art2.classList.add("show");
// };

// tab3.onclick = function () {
//   tab2.classList.remove("select");
//   art2.classList.remove("show");

//   tab1.classList.remove("select");
//   art1.classList.remove("show");

//   tab4.classList.remove("select");
//   art4.classList.remove("show");

//   tab3.classList.add("select");
//   art3.classList.add("show");
// };

// tab4.onclick = function () {
//   tab2.classList.remove("select");
//   art2.classList.remove("show");

//   tab3.classList.remove("select");
//   art3.classList.remove("show");

//   tab1.classList.remove("select");
//   art1.classList.remove("show");

//   tab4.classList.add("select");
//   art4.classList.add("show");
// };

// 进阶写法, 写不出来;

// let tabs = document.querySelectorAll(".tab");
// let arts = document.querySelectorAll(".artical");

// tabs.forEach(function (tab, index) {
//   tab.onclick = function () {
//     tabs.forEach(function (a) {
//       a.classList.remove("select");
//     });
//     arts.forEach(function (b) {
//       b.classList.remove("show");
//     });

//     this.classList.add("select");
//     arts[index].classList.add("show");
//   };
// });

// 事件委托

let tabs = document.querySelectorAll(".tab");
let arts = document.querySelectorAll(".artical");

let tabscontain = document.querySelector(".tabs");

tabscontain.onclick = function (e) {
  let clickTab = e.target;

  if (clickTab.classList.contains("tab")) {
    tabs.forEach(function (t) {
      t.classList.remove("select");
    });
    arts.forEach(function (a) {
      a.classList.remove("show");
    });

    clickTab.classList.add("select");

    let index = clickTab.dataset.index;
    arts[index].classList.add("show");
  }
};
