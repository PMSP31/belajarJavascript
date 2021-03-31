// Buat Objek Angkot
function Angkot(sopir, jurusan, penumpang, kas) {
  this.sopir = sopir;
  this.jurusan = jurusan;
  this.penumpang = penumpang;
  this.kas = kas;
  // penumpang naik lalu array penumpang terisi
  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };
  // jika penumpang turun berubah menjadi undifined dan kas bertambah karena bayar
  this.penumpangTurun = function (namaPenumpang, bayar) {
    //   cek apakan ada nama yang sama
    if (this.penumpang.length === 0) {
      alert("Angkot masih Kosong");
      return false;
    }
    for (var i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang = undefined;
        this.kas += bayar;
        return this.penumpang;
      }
    }
  };
}
var angkot1 = new Angkot("Paul Mahardika", ["Solo", "Jogja"], [], 0);
