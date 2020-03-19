
window.sr=ScrollReveal();
sr.reveal("header", {
  duration:2000,
  origin:"bottom"
});
//transparent div
sr.reveal(".titulo", {
  duration:2000,
  origin:"top",
  delay:1000
});
sr.reveal(".carrusel", {
  duration:4000,
  origin:"top",
  distance:"80px"
});

sr.reveal("footer", {
  duration:2000,
  origin:"top",
  distance:"50px"

});
sr.reveal(".info", {
  duration:3000,
  origin:"left",
  distance:"50px"

});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
  e.preventDefault();

  document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
  });
});
});






var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 2 seconds
}
