function coba() {
  let belajar = "saya belajar Javascript";
  console.log(belajar);
  console.log("javascript itu mudah");
}

function persegi(lebar, panjang) {
  luas = panjang * lebar;
  console.log(luas);
}
persegi(2, 3);

function out() {
  return console.log("output function");
}

function lingkaran(r) {
  luas = 3.14 * r * r;
  return luas;
}

const tinggi = 5;
let tabung = lingkaran(10) * tinggi;

function lewat(a) {
    return a;
}
//console.log(tabung);
console.log(lewat(10));
