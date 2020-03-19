window.sr=ScrollReveal();
sr.reveal("header", {
  duration:3000,
  origin:"bottom"
});
//transparent div
sr.reveal(".carrusel-nosotros", {
  duration:3000,
  origin:"top",
  distance:"80px"
});
sr.reveal(".bandera", {
  duration:3000,
  origin:"top",
  distance:"80px"
});


//carousel fade to show it
sr.reveal(".fuente", {
  duration:2000,
  origin:"top",
  delay:1000
});
//time back to a button
sr.reveal(".card-group", {
  duration:3000,
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
