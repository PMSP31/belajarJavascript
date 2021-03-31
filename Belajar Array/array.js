// tambah isi array
var arr = [];
arr[0] = "Paul";
arr[1] = "Putro";
console.log(arr);
// =====================================================================
// hapus isi array
var nama = ["Paul", "Mahardika", "Putro"];
nama[2] = undefined;
console.log(nama);
// =====================================================================
// menampilkan isi array
var nama = ["Paul", "Mahardika", "Putro"];

for (var i = 0; i < nama.length; i++) {
  console.log("Siswa ke-" + i + " adalah: " + nama[i]);
}
// =====================================================================
// METHOD PADA ARRAY
// 1.Join
var arr = [1, 2, 3, 4];
console.log(arr.join("-"));
// =====================================================================
// 2.Push & Pop menambah dan menghapus elemen terakhir. push bisa menambahkan banyak elemen
var nama = ["Paulus", "Mahardika", "Sarono", "Putro"];
nama.push("Sarono");
nama.pop();
console.log(nama.join("-"));
// =====================================================================
// 3.Unshift dan Shift menambah dan menghapus elemen awal
nama.unshift("Sarono");
nama.shift();
console.log(nama);
// =====================================================================
// 4.Splice (indexAwal,mauDihapusBerapa,elemenBaru1,elemenBaru2)
nama.splice(2, 0, "Sarono");
console.log(nama.join(" - "));
// =====================================================================
// 5.Slice (awal,akhir)
var nama2 = nama.slice(1, 3);
console.log(nama2.join(" - "));
// =====================================================================
// 6.Foreach
var angka = [3, 2, 5, 1, 6, 7, 4];
var nama = ["Paulus", "Mahardika", "Putro"];
angka.forEach(function (e) {
  console.log(e);
});

// foreach menggunakan index
nama.forEach(function (e, i) {
  console.log("Siswa ke-" + (i + 1) + " adalah " + e);
});
// =====================================================================
// 7.Map memanggil semua elemen pada array
var angka2 = angka.map(function (e) {
  return e * 2;
});
console.log(angka2);
// =====================================================================
// 8.Sort mengurutkan elemen dari terkecil ke besar
angka.sort();
console.log(angka);
// =====================================================================
// 9.Filter(filter dapat mengeluarkan banyak elemen jika find hanya 1 elemen terdekat)
var angka2 = angka.find(function (x) {
  return x > 3;
});
console.log(angka2);
// =====================================================================
