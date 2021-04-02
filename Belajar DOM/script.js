// DOM MANIPULATION Method
// =================================================
// Manipulasi ELEMENT
// =================================================
// element.innerHTML
// const judul = document.getElementById("judul");
// judul.innerHTML = "Paul Mahardika";
// =================================================
// element.style.<property css>
// const judul = document.querySelector("#judul");
// judul.style.color = "blue";
// judul.style.backgroundColor = "orange";
// =================================================
// element.setAttribute(menimpa attribute)
// const judul = document.getElementsByTagName("h1")[0];
// judul.setAttribute("name", "data");
// const a = document.querySelector("a");
// a.setAttribute("id", "link");
// =================================================
// element.classList.<method>
// const p2 = document.querySelector(".p2");
// add untuk tambah
// p2.classList.add("label");
// remove untuk menghapus
// p2.classList.remove("label");
// toggle jika ada hapus jika belum tambahkan
// p2.classList.toggle("para");
// item untuk mengetahui nama class dalam element
// p2.classList.item(0);
// contains untuk menanyakan adakah class dalam element
// p2.classList.contains("para");
// replace untuk mengganti
// p2.classList.replace("p2", "paragraf2");
// =================================================
// =================================================
// Manipulasi Node
// =================================================
// buat elemen baru
const pBaru = document.createElement("p");
const textPB = document.createTextNode("ini paragraf baru");
// simpan tulisan ke dalam paragraf
pBaru.appendChild(textPB);
// taruh pBaru ke section a
const secA = document.getElementById("a");
secA.appendChild(pBaru);

const iBaru = document.createElement("li");
const teksLi = document.createTextNode("item baru");

iBaru.appendChild(teksLi);

const ul = document.querySelector("section#b ul");
const li = ul.querySelector("li:nth-child(2)");

ul.insertBefore(iBaru, li);
// =================================================
const link = document.getElementsByTagName("a")[0];

secA.removeChild(link);

const secB = document.getElementById("b");
const p4 = secB.querySelector("p");

const jBaru = document.createElement("h2");
const textJ = document.createTextNode("judul baru");

jBaru.appendChild(textJ);

secB.replaceChild(jBaru, p4);
// =================================================
