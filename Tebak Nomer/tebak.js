var tebakan;
var comp;
var kesempatan;
var ulang = true;

while (ulang) {
  // set kesempatan sebanyak 3
  kesempatan = 3;
  // menjadikan bilangan random dari 1-10
  comp = Math.floor(Math.random() * 10) + 1;
  while (kesempatan > 0) {
    tebakan = prompt("pilih 1-10: \nKamu mempunyai " + kesempatan + " kesempatan");
    // jika tebakan benar langsung selesai
    if (tebakan == comp) {
      alert("tebakan kamu benar");
      break;
    } else if (tebakan == null) {
      // jika tidak menebak jawaban kesempatan berkurang
      alert("kamu tidak menebak jawaban \nMasih ada kesempatan");
      kesempatan--;
    } else if (tebakan > comp) {
      // alert tebakan melebihi nilai dari computer/,kesempatan berkurang
      alert("tebakan kamu terlalu tinggi \nAyo coba lagi!");
      kesempatan--;
    } else if (tebakan < comp) {
      // alert tebakan dibawah nilai dari computer/bot,kesempatan berkurang
      alert("tebakan kamu terlalu rendah \nAyo coba lagi!");
      kesempatan--;
    }
  }
  // jika tebakan tidak benar & kesempatan telah habis. keluarkan alert
  if (tebakan != comp) {
    alert("jawaban: " + comp + "\nkamu kalah dan kesempatanmu telah habis");
  } else {
    // jika tebakan benar
    alert("jawaban: " + comp + "\nkamu benar");
  }
  // jika ingin ulang langsung kembali ke kode awal
  ulang = confirm("lagi??");
}
// jika tidak mengulangi/telah selesai mencoba program langsung keluarkan alert
alert("terimakasih telah mencoba program ini");
