// fs.writeFileSync("nodeJS-core-module/catatana.txt", "synchronus");
// menulis string ke file (asyncronus)
/* try {
  fs.writeFileSync("nodeJS-core-module/sync.txt", "text synchronus");
  console.log("file succesfully created ...");
} catch (err) {
  console.log("file failed to create ...\n", err.message);
} */

// menulis string ke file (asyncronus)
/* fs.writeFile("nodeJS-core-module/async.txt", "text asyncnour", (e) => {
  if (e) {
    console.log("file failed to create ...\n", e.message);
  } else {
    console.log("file succesfully created ...");
  }
}); */

// membaca isi file (syncronus)
/* const readFileSync = fs.readFileSync("nodeJS-core-module/sync.txt", "utf8");
console.log(readFileSync); */

// membaca isi file (asyncronus)
/* fs.readFile("nodeJS-core-module/async.txt", "utf8", (e, data) => {
  if (e) {
    console.log("file failed to read ...\n", e.message);
  } else {
    console.log(data);
  }
}); */

// mengambil argument dari command line / membuat argument
/* const command = process.argv[2];
if (command == "add") {
  console.log("succes created");
}
 */
//  membuat argument menggunakan yargs
/* const yargs = require("yargs");
yargs.command(
  "add",
  "menambahhkan contack baru",
  () => {},
  (argv) => {
    console.log(argv);
  }
); */
// membuat argument menggunakan yargs objek
const yargs = require("yargs");
yargs.command({
  command: "add",
  describe: "menambahhkan contack baru",
  builder: {
    nama: {
      describe: "nama lengkap user",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "email user",
      demandOption: false,
      type: "string",
    },
    noHP: {
      describe: "nomer HP user",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    const contack = {
      nama: argv.nama,
      email: argv.email,
      noHP: argv.noHP,
    };
    console.log(contack);
  },
});
yargs.parse();
