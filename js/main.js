// Sticky menu backround
window.addEventListener('scroll', function() {
  if (this.window.scrollY > 150) {
    document.querySelector('#home').style.opacity = 0.9;
  } else {
    this.document.querySelector('#home').style.opacity = 1;
  }
});






// Smooth Scrolling
$('#home a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});