// fs.writeFileSync("nodeJS-core-module/catatana.txt", "synchronus");
const fs = require("node:fs");
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

// readline
const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");
const { resolve } = require("node:path");
const { rejects } = require("node:assert");
const rl = readline.createInterface({ input, output });
// // versi callback hell
// rl.question("what is your name : ", (name) => {
//   rl.question("what is your grade :", (grade) => {
//     const contack = { name, grade };
//     const file = fs.readFileSync("contacks.json", "utf-8");
//     const contacks = JSON.parse(file);
//     contacks.push(contack);
//     // console.log(contacks);
//     fs.writeFileSync("contacks.json", JSON.stringify(contacks, null, 1));
//     console.log(`Terimakasih sudah mengimpputkan data 👍`);
//     rl.close();
//   });
// });

// versi promise
const WriteQuestion = (Question) => {
  return new Promise((resolve, reject) => {
    rl.question(Question, (answer) => {
      resolve(answer);
    });
  });
};
