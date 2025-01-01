const yargs = require("yargs");
yargs.command(
  "add",
  "menambahkan kontak baru",
  () => {},
  (argv) => {
    console.log(argv.nama);
  }
);
yargs.parse();
// const { WriteQuestion, saveContack } = require("./contacks");
// const result = async () => {
//   const nama = await WriteQuestion("siapa nama anda : ");
//   const grade = await WriteQuestion("masukkan  grade anda :");
//   saveContack(nama, grade);
// };
// result();
