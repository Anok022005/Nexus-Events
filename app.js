/* =====================================================
   NEXUS EVENTS
   Main JavaScript
   ===================================================== */

window.addEventListener("load", function () {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.classList.add("hide");

        setTimeout(() => {
            loader.remove();
        }, 600);

    }, 1200);

});

/* =====================================================
   NAVBAR
===================================================== */

const header = document.querySelector(".header");
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

/* -------------------------
   Sticky Glass Navbar
------------------------- */

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

/* -------------------------
   Mobile Menu
------------------------- */

menuToggle.addEventListener("click", () => {

    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");

});

/* -------------------------
   Close Menu After Click
------------------------- */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");

    });

});

/* =====================================================
   FAQ ACCORDION
===================================================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {

        const isActive = item.classList.contains("active");

        // Close all FAQs
        faqItems.forEach(faq => {
            faq.classList.remove("active");
        });

        // Open clicked FAQ
        if (!isActive) {
            item.classList.add("active");
        }

    });

});

/* =====================================================
   BACK TO TOP
===================================================== */

const backToTop = document.querySelector(".back-to-top");

if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});