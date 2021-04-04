const btn = document.getElementsByTagName("button")[0];

btn.addEventListener("click", function () {
  //   document.body.style.backgroundColor = "lightblue";
  // document.body.setAttribute("class", "biru-muda");
  document.body.classList.toggle("biru-muda");
});
// Membuat button ubah warna via javascript
const tWarna = document.createElement("button");
const teksBtn = document.createTextNode("Ubah Warna");

tWarna.appendChild(teksBtn);

tWarna.setAttribute("type", "button");

btn.after(tWarna);
// ketikan button diklick akan mengeluarkan warna background random
tWarna.addEventListener("click", function () {
  const r = Math.floor(Math.random() * 255 + 1);
  const g = Math.floor(Math.random() * 255 + 1);
  const b = Math.floor(Math.random() * 255 + 1);
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

const sMerah = document.getElementById("merah");
const sHijau = document.getElementById("hijau");
const sBiru = document.getElementById("biru");

sMerah.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

sHijau.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

sBiru.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
// menganti warna background ketika cursor bergerak
document.body.addEventListener("mousemove", function (e) {
  // posisi mouse
  // console.log(e.clientX);
  // ukuran browser
  // console.log(window.innerWidth);
  const xPos = Math.round((e.clientX / window.innerWidth) * 255);
  const yPos = Math.round((e.clientY / window.innerHeight) * 255);
  document.body.style.backgroundColor = "rgb(" + xPos + "," + yPos + ",100)";
});
