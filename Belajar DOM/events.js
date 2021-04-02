// EVENT METHOD
// =================================================
// Event Handler
// const p3 = document.querySelector(".p3");
// function gantiBG() {
//   p3.style.backgroundColor = "lightblue";
// }

// const p2 = document.querySelector(".p2");
// p2.onclick = gantiBG;
// =================================================
// addEventListener
// const p4 = document.querySelector("section#b p");
// p4.addEventListener("click", function () {
//   const ul = document.querySelector("section#b ul");
//   const liBaru = document.createElement("li");
//   const teksLi = document.createTextNode("item Baru");
//   liBaru.appendChild(teksLi);
//   ul.appendChild(liBaru);
// });
// =================================================

const p3 = document.querySelector(".p3");
// event Handler akan menimpa,jadi dari syntax ini yang dijalankan hanya 1 yaitu ubah warna teks
// p3.onclick = function () {
//   p3.style.backgroundColor = "orange";
// };
// p3.onclick = function () {
//   p3.style.color = "white";
// };
// sedangkan addEventListener menambah dan menjalankan semua syntax
p3.addEventListener("click", function () {
  p3.style.backgroundColor = "orange";
});
p3.addEventListener("click", function () {
  p3.style.color = "white";
});
