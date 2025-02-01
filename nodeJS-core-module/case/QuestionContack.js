const { WriteQuestion, saveContack } = require("./contacks");
const yargs = require("yargs");
yargs.command({
  command: "add",
  describe: "menambahkan kontak baru",
  builder: {
    nama: {
      describe: "nama user",
      demandOption: true,
      type: "string",
    },
    umur: {
      describe: "umur user",
      demandOption: true,
      type: "number",
    },
    email: {
      describe: "email user",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    saveContack(argv.nama, argv.umur, argv.email);
  },
});
yargs.parse();

const result = async () => {
  const nama = await WriteQuestion("siapa nama anda : ");
  const umur = await WriteQuestion("masukkan  umur anda :");
  const email = await WriteQuestion("masukkan  email anda :");

  saveContack(nama, umur, email);
};
result();
