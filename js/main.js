if (window.SimpleAnime) {
  new SimpleAnime();
}
if (window.SimpleSlide) {
  new SimpleSlide({
    slide: "quote",
    auto: true,
    time: 5000
  });

  new SimpleSlide({
    slide: "portfolio",
    auto: true,
    time: 5000,
    nav: true
  })
}