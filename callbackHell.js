
setTimeout(function () {
  document.body.style.backgroundColor = "red";
  setTimeout(function () {
    document.body.style.backgroundColor = "yellow";
    setTimeout(function () {
      document.body.style.backgroundColor = "green";
      setTimeout(function () {
        document.body.style.backgroundColor = "black";
        setTimeout(function () {
          document.getElementById('footer').style.backgroundColor = "blue";
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

searchMoviesApi(
  "avengers",
  function (movies) {
    saveTomMyDb(
      movies,
      function () {
        // kalau berhasil kita simpan
        filteringMovie(
          movies,
          () => {},
          () => {},
        );
      },
      () => {
        // kalau gagal kita coba lagi
      },
    );
  },
  () => {
    //server error
  },
);
