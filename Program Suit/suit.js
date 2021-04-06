var tanya = true;
while (tanya) {
  // menentukan pilihan player
  var p = prompt("Pilih : gajah,semut,orang");
  // menentukan pilihan komputer
  // membangkitkan bilangan random
  var comp = Math.random();

  // jika nilai komputer lebih kecil dari 0.34
  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    // jika nilai komputer lebih besar sama dengan 0.34 dan kurang dari 0.67
    comp = "orang";
  } else {
    // jika nilai komputer lebih dari 0.67
    comp = "semut";
  }
  var hasil = "";
  // menentukan rules

  //jika nilai player dan computer sama maka seri
  if (p == comp) {
    hasil = "Seri";
  } else if (p == "gajah") {
    // player input gajah,jika computer input orang maka player menang : jika semut komputer menang(menggunakan logika ternary)
    hasil = comp == "orang" ? "Menang" : "Kalah";
  } else if (p == "orang") {
    // player input orang,jika computer input gajah maka player kalah : jika semut komputer kalah(menggunakan logika ternary)
    hasil = comp == "gajah" ? "Kalah" : "Menang";
  } else if (p == "semut") {
    // player input semut,jika computer input orang maka player menang : jika gajah komputer menang(menggunakan logika ternary)
    hasil = comp == "orang" ? "Kalah" : "Menang";
  } else {
    // jika memasukan input selain semut,gajah,orang maka muncul alert
    hasil = "memasukan input yang salah";
  }
  // tampilkan hasil
  alert("Kamu Memilih : " + p + " Dan komputer memilih : " + comp + "\nMaka hasilnya kamu " + hasil);
  // alert untuk rematch
  tanya = confirm("Rematch??");
}
// jika tidak rematch langsung keluar alert
alert("Terima kasih telah mencoba program ini");
