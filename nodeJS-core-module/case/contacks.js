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

// versi promise
const WriteQuestion = (Question) => {
  return new Promise((resolve, reject) => {
    rl.question(Question, (answer) => {
      resolve(answer);
    });
  });
};

const saveContack = (nama, grade) => {
  const contack = { nama, grade };
  console.log(contack);
  const file = fs.readFileSync("contacks.json", "utf-8");
  const contacks = JSON.parse(file);
  contacks.push(contack);
  // console.log(contacks);
  fs.writeFileSync("contacks.json", JSON.stringify(contacks, null, 1));
  console.log(`Terimakasih sudah mengimpputkan data 👍`);
  rl.close();
};
module.exports = { WriteQuestion, saveContack };
