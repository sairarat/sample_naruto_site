let menu = document.querySelector(".menuIcon");
let navList = document.querySelector(".navList");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navList.classList.toggle("open");
};

const sr = ScrollReveal({
  distance: "65px",
  duration: 2600,
  delay: 450,
  reset: true
});

sr.reveal(".heroText", { delay: 200, origin: "top" });
sr.reveal(".heroImg", { delay: 450, origin: "top" });
