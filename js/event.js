function tampil(b) {
  a = document.querySelector("p").innerText = "belajar event js" + b;
  //a.innerText = "belajar event js";
  console.log("belajar event js");
}

judul.onclick = function () {
  console.log("beelajar event js menggunakan id");
  document.querySelector(".isi").innerHTML = "beelajar event js menggunakan id";
};
