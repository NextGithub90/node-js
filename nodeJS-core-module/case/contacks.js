// validator
// readline
const fs = require("node:fs");
const chalk = require("chalk");

const validator = require("validator");
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

// versi promise
const WriteQuestion = (Question) => {
  return new Promise((resolve, reject) => {
    rl.question(Question, (answer) => {
      resolve(answer);
    });
  });
};

const saveContack = (nama, umur, email) => {
  const contack = { nama, umur, email };
  const file = fs.readFileSync("contacks.json", "utf-8");
  const contacks = JSON.parse(file);
  // mengecek duplikat
  const duplikat = contacks.find((contack) => contack.nama === nama);
  if (duplikat) {
    console.log(chalk.red.bold("nama sudah ada di database, masukkan nama lain"));
    return rl.close();
  }
  // memastikan email user valid
  if (!validator.isEmail(email)) {
    console.log(chalk.red.bold("Email mu salah bro"));
    return rl.close();
  }
  // memasukkan data user ke json
  contacks.push(contack);
  fs.writeFileSync("contacks.json", JSON.stringify(contacks, null, 1));
  console.log(chalk.green.bold(`Terimakasih sudah mengimpputkan data`));
  rl.close();
};
module.exports = { WriteQuestion, saveContack };
