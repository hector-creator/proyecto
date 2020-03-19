window.sr=ScrollReveal();
sr.reveal("header", {
  duration:2000,
  origin:"bottom"
});
//transparent div
sr.reveal(".ban", {
  duration:3000,
  origin:"top",
  distance:"80px"
});
//carousel fade to show it
sr.reveal(".impermeabilizantes", {
  duration:4000,
  origin:"top",
  distance:"80px"
});
//time back to a button
sr.reveal(".textos1", {
  duration:2000,
  origin:"top",
  delay:1000
});
//card group of the products
sr.reveal(".textos2", {
  duration:2000,
  origin:"top",
  delay:1000
});
//our products line
sr.reveal(".pinturas_hogar", {
  duration:4000,
  origin:"top",
  distance:"50px",
  viewFactor:0.2
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
