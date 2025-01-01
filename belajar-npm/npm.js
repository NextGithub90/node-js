// mengecek apakah string yang dimasukkan
const validator = require("validator");
console.log(validator.isEmail("aldiartuda@gmail.com"));
console.log(validator.isMobilePhone("6281234567890", "id-ID"));
console.log(validator.isNumeric("1234567hh890"));
console.log(validator.isCurrency("$55"));
