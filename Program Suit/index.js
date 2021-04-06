function compChoose() {
  const comp = Math.random();

  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

function getHasil(comp, p) {
  if (p == comp) return "Seri";
  if (p == "gajah") return comp == "orang" ? "Menang" : "Kalah";
  if (p == "orang") return comp == "gajah" ? "Kalah" : "Menang";
  if (p == "semut") return comp == "orang" ? "Kalah" : "Menang";
}

function acak() {
  const imgComputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "orang", "semut"];
  let i = 0;
  const awal = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - awal > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (i) {
  i.addEventListener("click", function () {
    const computer = compChoose();
    const player = i.className;
    const hasil = getHasil(computer, player);

    acak();

    setTimeout(function () {
      const imgComputer = document.querySelector(".img-komputer");
      imgComputer.setAttribute("src", "img/" + computer + ".png");

      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
  });
});

// const gajah = document.querySelector(".gajah");

// gajah.addEventListener("click", function () {
//   const computer = compChoose();
//   const player = gajah.className;
//   const hasil = getHasil(computer, player);

//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "img/" + computer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// const orang = document.querySelector(".orang");

// orang.addEventListener("click", function () {
//   const computer = compChoose();
//   const player = orang.className;
//   const hasil = getHasil(computer, player);

//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "img/" + computer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
// const semut = document.querySelector(".semut");

// semut.addEventListener("click", function () {
//   const computer = compChoose();
//   const player = semut.className;
//   const hasil = getHasil(computer, player);

//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "img/" + computer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
