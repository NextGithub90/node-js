// menggunakan require untuk menjalankan 2 file bersamaan
const CetakNama = require("./coba");
// mengakses obje,var,modul di luar node menggunakan = module.exports

// const cetakAbjad = (abjad) => `adjad pertama adalah ${abjad}`;
// console.log(cetakAbjad("A"));

//mengeksekusi coba.js
let nama = "azzam";
console.log(CetakNama(nama));
