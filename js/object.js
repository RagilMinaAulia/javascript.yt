const objek = {
  nama: "Ragil Mina Aulia",
  telp: 12345,
  buah: ["apel", "jeruk", "mangga"],
  coba: function () {
    return "coba function dalam objek";
  },
  boleh: true,
  "tulis saja": 12345,
};
console.log(objek.nama);
console.log(objek.telp);
console.log(objek.boleh);
console.log(objek.coba());
console.log(objek.buah[2]);
console.log(objek["tulis saja"]);
