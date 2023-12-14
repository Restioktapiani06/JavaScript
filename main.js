//Biodata
let nama = "resti";
let umur = 17;
let jenisKelamin = "perempuan";

let tampil = " Nama saya " + nama + ", umur saya " + umur +" tahun ";
console.log(tampil)

//perhitungan
let a = 1
let b = 2

//hasiljumlah 
hasilJumlah = ( a + b )

console.log(`hasil jumlah ${a} dan ${b} adalah ${hasilJumlah}`)

//perbandingan
let banding = (a == b );
console.log(`hasil banding${a} dan ${b} adalah ${banding}`)

//pengulangan
for(let i = 1; i <= 5; i++){
    console.log(`Gaskeunnnn ${i}`)
}

//while
var x = prompt ("masukan kalimat : ");
var i = 1;

while(i <= 5) {
    console.log(x,i);
    i++;
}

//soal no 2
const nilaiAwal = document.getElemenbyId('input1').value