var tanya = true;
while (tanya) {
  // menentukan pilihan player
  var p = prompt("Pilih : gunting,batu,kertas");
  // menentukan pilihan komputer
  // membangkitkan bilangan random
  var comp = Math.random();

  // jika nilai komputer lebih kecil dari 0.34
  if (comp < 0.34) {
    comp = "gunting";
  } else if (comp >= 0.34 && comp < 0.67) {
    // jika nilai komputer lebih besar sama dengan 0.34 dan kurang dari 0.67
    comp = "kertas";
  } else {
    // jika nilai komputer lebih dari 0.67
    comp = "batu";
  }
  var hasil = "";
  // menentukan rules

  //jika nilai player dan computer sama maka seri
  if (p == comp) {
    hasil = "Seri";
  } else if (p == "gunting") {
    // player input gunting,jika computer input kertas maka player menang : jika batu komputer menang(menggunakan logika ternary)
    hasil = comp == "kertas" ? "Menang" : "Kalah";
  } else if (p == "kertas") {
    // player input kertas,jika computer input gunting maka player kalah : jika batu komputer kalah(menggunakan logika ternary)
    hasil = comp == "gunting" ? "Kalah" : "Menang";
  } else if (p == "batu") {
    // player input batu,jika computer input kertas maka player menang : jika gunting komputer menang(menggunakan logika ternary)
    hasil = comp == "kertas" ? "Kalah" : "Menang";
  } else {
    // jika memasukan input selain batu,gunting,kertas maka muncul alert
    hasil = "memasukan input yang salah";
  }
  // tampilkan hasil
  alert("Kamu Memilih : " + p + " Dan komputer memilih : " + comp + "\nMaka hasilnya kamu " + hasil);
  // alert untuk rematch
  tanya = confirm("Rematch??");
}
// jika tidak rematch langsung keluar alert
alert("Terima kasih telah mencoba program ini");
