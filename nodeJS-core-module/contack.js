const fs = require("node:fs");

// readline
const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");
const { resolve } = require("node:path");
const { rejects } = require("node:assert");
const rl = readline.createInterface({ input, output });

const dataPath = "contacks.json";

//mwngwecek json apakah sudah dibuat
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

// 2. menmbuat functio question fersi promise
const WriteQuestion = (question) => {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

const simpanContack = (nama, umur, email) => {
  const contack = { nama, umur, email };
  const readFileSync = fs.readFileSync("contacks.json", "utf8");
  const contacks = JSON.parse(readFileSync);
  contacks.push(contack);
  fs.writeFileSync("contacks.json", JSON.stringify(contacks, null, 1));
  console.log(contack);
  console.log("data sudah di buat terimakasih :) ");
  rl.close();
};

const hapusContack = (nama) => {
  const readFileSync = fs.readFileSync("contacks.json", "utf8");

  let contacks = JSON.parse(readFileSync);
  // Filter array untuk menghapus kontak dengan nama yang diberikan
  const initialLength = contacks.length;
  contacks = contacks.filter((contack) => contack.nama !== nama);
  console.log(contacks);
  if (contacks.length === initialLength) {
    console.log(`nama ${nama} tidak ada`);
  } else {
    console.log(`Kontak dengan nama ${nama} telah dihapus.`);
  }

  fs.writeFileSync("contacks.json", JSON.stringify(contacks, null, 1));
  rl.close();
};

module.exports = { WriteQuestion, simpanContack, hapusContack };
