function hasil(aritmatika) {
  var bil1 = parseFloat(document.kall.bil1.value);
  var bil2 = parseFloat(document.kall.bil2.value);

  switch (aritmatika) {
    case 1:
      var total = bil1 + bil2;
      break;
    case 2:
      var total = bil1 - bil2;
      break;
    case 3:
      var total = bil1 * bil2;
      break;
    case 4:
      var total = bil1 / bil2;
      break;
  }
  alert("Hasilnya adalah " + total);
}
