const fs = require("node:fs");
// fs.writeFileSync("nodeJS-core-module/catatana.txt", "synchronus");
try {
  fs.writeFileSync("nodeJS-core-modggule/catatana.txt", "synchronus");
  console.log("file succesfully created ...");
} catch (err) {
  //   console.log(err, "file failed to create ...");
  console.log("file failed to create ...", err.message);
}
