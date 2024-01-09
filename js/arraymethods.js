//array -> string, number, objek, function, campuran
let nilai = [
  { nama: "budi", ipa: 90, bahasa: 70, mat: 80 },
  { nama: "titi", ipa: 85, bahasa: 90, mat: 70 },
  { nama: "andi", ipa: 90, bahasa: 75, mat: 90 },
  { nama: "reni", ipa: 80, bahasa: 80, mat: 85 },
];

let nama = ["budi", "titi", "andi", "reni"];
nama.push("ani", "roma");
// console.log(nama.pop());
// console.log(nama.shift());
nama.unshift("gigi", "aja");
//console.log(nilai[0].nama);
//console.log(nama.splice(3,4));
console.log(nama.slice(0, 3));
console.log(nama);
