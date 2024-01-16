//array -> string, number, objek, function, campuran
let nilai = [
  { nama: "budi", ipa: 90, bahasa: 70, mat: 80 },
  { nama: "titi", ipa: 85, bahasa: 90, mat: 70 },
  { nama: "andi", ipa: 90, bahasa: 75, mat: 90 },
  { nama: "reni", ipa: 80, bahasa: 80, mat: 85 },
];

let nama = ["budi", "titi", "andi", "reni"];
//nama.push("ani", "roma");
// console.log(nama.pop());
// console.log(nama.shift());
//nama.unshift("gigi", "aja");
let mapel = ["ipa", "mat", "bahasa"];
// console.log(nama.concat(mapel));
// console.log(nama.concat(["ips", "pkn", "sejarah"]));
//console.log(nilai[0].nama);
//console.log(nama.splice(3,4));
//console.log(nama.slice(0, 3));
//console.log(nama);

// nama.forEach(function (a) {
//   console.log(a);
// });

// for (let index = 0; index < nama.length; index++) {
//   console.log(nama[index]);
// };

// nama.forEach(a => console.log(a));

// nilai.filter(function (a) {
//   if (a.ipa > 80) {
//     console.log(a.nama);
//   }
// });

// nilai.filter((a) => (a.ipa > 80 && a.mat > 80 ? console.log(a.nama) : null));

// let murid=nilai.map(function (a) {
//   return a.nama;
// });

// let murid=nilai.map(a => [a.nama, a.ipa, a.bahasa]);
// console.log(murid);

// mapel.sort();
// console.log(mapel);

// let hasil= nilai.reduce(function (a, b) {
//   return (a = a + b.ipa);
// }, 0);
let hasil = nilai.reduce((a,b) => (a += b.bahasa), 0);
console.log(hasil);