const { WriteQuestion, simpanContack, hapusContack } = require("./contack");
const yargs = require("yargs");
yargs.command({
  command: "add",
  describe: "menambahkan kontak baru",
  builder: {
    nama: {
      describe: "nama lengkap user",
      demandOption: true,
      type: "string",
    },
    umur: {
      describe: "umur user",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "email user",
      demandOption: false,
      type: "string",
    },
  },
  handler: function (argv) {
    simpanContack(argv.nama, argv.umur, argv.email);
  },
});

yargs.command({
  command: "remove",
  describe: "menghapus kontak",
  builder: {
    nama: {
      describe: "nama kontak user yang akan dihapus",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    hapusContack(argv.nama);
  },
});

yargs.parse();

/* const result = async () => {
  const nama = await WriteQuestion("masukkan nama anda: ");
  const umur = await WriteQuestion("masukkan umur anda: ");
  const email = await WriteQuestion("masukkan email anda: ");
  simpanContack(nama, umur, email);
};
result();
 */
/* rl.question("masukkan nama anda", (nama) => {
  rl.question("masukkan umur anda ", (umur) => {
    const contack = { nama, umur };
    const readFileSync = fs.readFileSync("contacks.json", "utf8");
    const contacks = JSON.parse(readFileSync);
    contacks.push(contack);
    fs.writeFileSync("contacks.json", JSON.stringify(contacks, null, 1));
    console.log("arigatooo");
    rl.close();
  });
}); */
