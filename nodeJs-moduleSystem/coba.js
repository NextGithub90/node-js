function cetakNama(nama) {
  return `halo ${nama}`;
}
const pi = 3.14;
const mahasiswa = {
  nama: "azzam",
  umur: 15,
  cetakMhs() {
    return `halo ${this.nama} umur ${this.umur} `;
  },
};
class Orang {
  constructor() {
    console.log("objek telah dibuat");
  }
}
// versi nulis satu-satu
// module.exports.cetakNama = cetakNama;
// module.exports.pi = pi;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// versi objek
/* module.exports = {
  cetakNama: cetakNama,
  pi: pi,
  mahasiswa: mahasiswa,
  Orang: Orang,
};
 */
// versi js es6
module.exports = { cetakNama, pi, mahasiswa, Orang };
