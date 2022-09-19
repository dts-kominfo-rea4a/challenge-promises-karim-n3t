const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async(param) => {

  let data1 = await promiseTheaterIXX();
  let data2 = await promiseTheaterVGC();

  return new Promise((resolve, rejected) => {
    let jumlah = 0;

    data1.forEach(element => {
      if (element.hasil == param) {
        jumlah++
      }
    });

    data2.forEach(element => {
      if (element.hasil == param) {
        jumlah++
      }
    });

    return resolve(jumlah);
  });
};

module.exports = {
  promiseOutput,
};
