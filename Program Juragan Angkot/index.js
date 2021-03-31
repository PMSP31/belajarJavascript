var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kososng langsung tambah penumpang
  if (penumpang.length == 0) {
    penumpang.push(namaPenumpang);
    return penumpang;
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      // jika anda bangku kosong penumpang baru menduduki tampat yang kosong
      if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;
      } else if (penumpang[i] == namaPenumpang) {
        // jika ada nama penumpang yang sama akan muncul pesan error
        console.log(namaPenumpang + " sudah ada di dalam angkot.");
        return penumpang;
      } else if (i == penumpang.length - 1) {
        // ukuran angkot akan terus bertambah
        penumpang.push(namaPenumpang);
        return penumpang;
      }
    }
  }
};
var hapusPenumpang = function (namaPenumpang, penumpang) {
  // jika akan menghapus penumpang tetapi angkot masih kosong keluar pesan error
  if (penumpang.length == 0) {
    console.log("angkot kosong.");
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        // jika namaPenumpang sama,hapus penumpang dan jadikan tempatnya undefined
        penumpang[i] = undefined;
        return penumpang;
      } else if (i == penumpang.length - 1) {
        // jika tidak ada namaPenumpang yang sama keluar pesan error
        console.log(namaPenumpang + " tidak ada dalam angkot");
        return penumpang;
      }
    }
  }
  return penumpang;
};
