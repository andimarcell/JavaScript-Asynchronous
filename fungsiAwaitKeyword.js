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


// delayedColorChange("red", 1000)
//         .then(() => delayedColorChange("yellow", 1000))
//         .then(() => delayedColorChange("blue", 1000))
//         .then(() => delayedColorChange("green", 1000))
//         .then(() => delayedColorChange("black", 1000))
//         .then(() => delayedColorChange("white", 1000));

async function changeColor() {
    await delayedColorChange("red", 1000);
    await delayedColorChange("yellow", 1000);
    await delayedColorChange("blue", 1000);
    await delayedColorChange("green", 1000);
    await delayedColorChange("black", 1000);
    await delayedColorChange("white", 1000);
    return "Selesai";
}

async function printRainbow() {
    await changeColor();
    console.log('All Done!');
}

printRainbow();

// changeColor().then((ress) => {
//     alert(ress);
//     console.log(ress);
// });