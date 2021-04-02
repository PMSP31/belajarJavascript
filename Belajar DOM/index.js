// DOM Selection Method
// =====================================================
// document.getElementsById() menghasilkan element
// const judul = document.getElementById("judul");
// judul.style.color = "red";
// judul.style.backgroundColor = "black";
// judul.style.textAlign = "center";
// judul.innerHTML = "Data Diri";
// =====================================================
// document.getElementsByTagName() menghasilkan HTMLCollection
// const para = document.getElementsByTagName("p");
// for (let i = 0; i < para.length; i++) {
//   para[i].style.backgroundColor = "lightblue";
// }
// =====================================================
// document.getElementsByClassName() menghasilkan HTMLCollection
// const p1 = document.getElementsByClassName("p1");
// p1[0].innerHTML = "terubah di javascript";
// =====================================================
// document.querySelector() menghasilkan element(dipilih elemen pertama)
// const p4 = document.querySelector("#b p");
// p4.style.color = "green";
// p4.style.backgroundColor = "black";

// const li2 = document.querySelector("#b ul li:nth-child(2)");
// li2.style.backgroundColor = "orange";
// =====================================================
// document.querySelectorAll() menghasilkan node
// const p = document.querySelectorAll("p");
// p[2].style.backgroundColor = "blue";
// for (let i = 0; i < p.length; i++) {
//   p[i].innerHTML = "Diubah dari querySelectorAll";
// }
// =====================================================
