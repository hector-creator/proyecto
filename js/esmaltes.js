window.sr=ScrollReveal();
sr.reveal("header", {
  duration:2000,
  origin:"bottom"
});
//transparent div
sr.reveal(".esmalte", {
  duration:3000,
  origin:"top",
  distance:"80px"
});
//carousel fade to show it
sr.reveal(".em_1", {
  duration:4000,
  origin:"top",
  distance:"80px"
});
//time back to a button
sr.reveal(".emt_1", {
  duration:3000,
  origin:"top",
  delay:2000
});
//card group of the products
sr.reveal(".em_2", {
  duration:5000,
  origin:"top",
  distance:"50px"
});
//our products line
sr.reveal(".emt_2", {
  duration:3000,
  origin:"top",
  delay:2000
  /*
  distance:"50px",
  viewFactor:0.2*/
});



sr.reveal(".barrot", {
  duration:5000,
  origin:"top",
  distance:"50px"
});

sr.reveal(".escalera", {
  duration:3000,
  origin:"top",
  distance:"50px"
});

sr.reveal(".cajon", {
  duration:4000,
  origin:"top",
  distance:"50px"
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
