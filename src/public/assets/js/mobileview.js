const navbar = document.querySelector(".nav");
const mobileToggler = document.querySelector(".mobile-nav");
const nav = document.querySelector("ul");

mobileToggler.addEventListener("click", () => {

    if (nav.style.display === "block") { 
        navbar.style.marginBottom = "0px";
        nav.style.display = "none";
    } else {
        navbar.style.marginBottom = "270px";
        nav.style.display = "block";
    }

    mobileToggler.classList.toggle("mobile-toggle");
})
