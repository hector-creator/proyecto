window.sr=ScrollReveal();
sr.reveal("header", {
  duration:2000,
  origin:"bottom"
});
//transparent div
sr.reveal(".pys", {
  duration:3000,
  origin:"top",
  distance:"80px"
});
sr.reveal(".adhesive", {
  duration:2000,
  origin:"top",
  delay:1000
});


//carousel fade to show it
sr.reveal(".texto_pegamentos", {
  duration:4000,
  origin:"top",
  distance:"80px"
});
//time back to a button
sr.reveal(".texto-pegamento", {
  duration:2000,
  origin:"top",
  delay:1000
});
//card group of the products
sr.reveal(".texto-sellador", {
  duration:2000,
  origin:"top",
  delay:1000
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
