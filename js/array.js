let coba = function () {
  return "coba function";
};

let buah = [
  "apel",
  "mangga",
  "jeruk",
  10,
  coba(),
  (tes = () => "hasil return arrow function"),
  function namaa() {
    return "smk revit";
  },
];
console.log(buah);
console.log(buah[0]);

for (let i in buah) {
  console.log(buah[i]);
}

console.log(buah[5]());
console.log(buah[6]());
