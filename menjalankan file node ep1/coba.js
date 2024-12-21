// require("./index");
// console.log("halo");
function CetakNama(nama) {
  return `halo ${nama}`;
}
// console.log();
// mengakses obje,var,modul di luar node menggunakan = module.exports
module.exports = CetakNama;
