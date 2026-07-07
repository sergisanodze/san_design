const pageLinks = document.querySelectorAll("[data-page]");

pageLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const page = this.dataset.page;

    if (page === "products") {
      window.location.href = "products.html";
    }
  });
});

const externalLinks = document.querySelectorAll(
  ".whatsapp, .socials a, .product-btn"
);

externalLinks.forEach((link) => {
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
});


const currentPage = window.location.pathname.split("/").pop() || "index.html";
const navItems = document.querySelectorAll(".nav a");

navItems.forEach((item) => {
  const linkPage = item.getAttribute("href");

  if (linkPage === currentPage) {
    item.classList.add("active-link");
  }
});



// Active navbar link
const currentPage = window.location.pathname.split("/").pop() || "index.html";
const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach((link) => {
  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {
    link.classList.add("active-link");
  }
});

// Open external links in new tab
const externalLinks = document.querySelectorAll(".whatsapp, .socials a, .product-btn, .about-btn");

externalLinks.forEach((link) => {
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
});