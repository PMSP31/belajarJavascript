// const x = document.querySelector(".close");
// const card = document.querySelector(".card");

// x.addEventListener("click", function () {
//   card.style.display = "none";
// });

// DOM TRAVERSAL Method
// parentNode --> node
// parentElement --> element
// nextSibling --> node
// nextElementSibling --> element
// previousSibling  --> node
// previousElementSibling --> element

// const x = document.querySelectorAll(".close");

// for (let i = 0; i < x.length; i++) {
//   x[i].addEventListener("click", function (e) {
//     // x[i].parentElement.style.display = "none";
//     e.target.parentElement.style.display = "none";
//   });
// }

// x.forEach(function (e) {
//   e.addEventListener("click", function (i) {
//     i.target.parentElement.style.display = "none";
//     i.preventDefault();
//     i.stopPropagation();
//   });
// });

// const cards = document.querySelectorAll(".card");
// cards.forEach(function (e) {
//   e.addEventListener("click", function () {
//     alert("ok");
//   });
// });

// Event Bubling
const contain = document.querySelector(".container");

contain.addEventListener("click", function (e) {
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
  }
});
