// Toogle Button
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");
const closeicon = document.getElementById("closeicon");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("right-[0]");
});

closeicon.addEventListener("click", () => {
  navMenu.classList.toggle("right-[0]");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("right-[0]");
  });
});

// Sticky Header
const scrollHeader = () => {
  const stickyMenu = document.getElementById("sticky-menu");

  if (this.scrollY >= 150) {
    stickyMenu.classList.remove("lg:top-[-100%]");
    stickyMenu.classList.add("bg-black/80");
  } else {
    stickyMenu.classList.add("lg:top-[-100%]");
    stickyMenu.classList.remove("bg-black/80");
  }
};

window.addEventListener("scroll", scrollHeader);

// Show Scroll Up
const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scroll-up");

  if (this.scrollY >= 250) {
    scrollUpBtn.classList.remove("-bottom-1/2");
    scrollUpBtn.classList.add("bottom-4");
  } else {
    scrollUpBtn.classList.add("-bottom-1/2");
    scrollUpBtn.classList.remove("bottom-4");
  }
};

window.addEventListener("scroll", scrollUp);

// Active Link
const activeLink = () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (this.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((item) => {
    item.classList.remove("active");

    if (item.href.includes(current)) {
      item.classList.add("active");
    }
  });
};

window.addEventListener("scroll", activeLink);
