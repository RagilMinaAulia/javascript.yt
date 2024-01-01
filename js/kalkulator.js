let btn = document.querySelectorAll(".btn-angka > button");
let tampi = document.querySelector("#tampil");
tampil.value = btn[3].innerHTML;
//console.log(btn[6].innerHTML);

for (let index = 0; index < btn.length; index++) {
  btn[index].onclick = function () {
    //console.log(btn[index].innerHTML);
    tampil.value = btn[index].innerHTML;
  };
}
