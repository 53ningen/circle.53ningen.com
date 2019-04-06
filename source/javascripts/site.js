var allImagesLoaded = false;
var loadImages = () => {
  const imgs = document.querySelectorAll('img[data-src]');
  if (imgs.length == 0) {
    allImagesLoaded = true;
    return;
  }
  const offset = window.innerHeight * 0.5;
  const maxY = window.pageYOffset + window.innerHeight;
  [].forEach.call(imgs, img => {
    if (maxY >= img.offsetTop - offset) {
      img.setAttribute('src', img.getAttribute('data-src'));
      img.onload = function() {
        img.removeAttribute('data-src');
      };
    }
  });
}

window.addEventListener('scroll', (e) => {
  if (window.pageYOffset % 5 == 0 && !allImagesLoaded) {
    loadImages();
  }
});

window.onload = () => {
  loadImages();
};
