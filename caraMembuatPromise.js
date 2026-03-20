new Promise((resolve, reject) => {
  return resolve("Success");
  //   resolve(() => {});
  //   reject(() => {});
});

const contohPromise = () => {
  return new Promise((resolve, reject) => {
    // resolve(() => {
    //   "berhasil";
    // });
    reject(() => {
      "gagal";
    });
  });
};

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

let x = 0;
let promiseChain = Promise.resolve();
do {
    promiseChain = promiseChain.then(() => delayedColorChange("red", 500))
        .then(() => delayedColorChange("yellow", 500))
        .then(() => delayedColorChange("blue", 500))
        .then(() => delayedColorChange("green", 500))
        .then(() => delayedColorChange("black", 500))
        .then(() => delayedColorChange("white", 500));
        x++;
      }while (x < 5);
