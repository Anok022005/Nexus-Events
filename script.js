
/*=========================================
            IMAGE PARALLAX
=========================================*/

const heroImage = document.querySelector(".hero-right img");

window.addEventListener("mousemove",(e)=>{

    const x = (window.innerWidth / 2 - e.clientX) / 60;

    const y = (window.innerHeight / 2 - e.clientY) / 60;

    heroImage.style.transform =
    `translate(${x}px,${y}px) scale(1.05)`;

});

/*=========================================
            BUTTON RIPPLE
=========================================*/

document.querySelectorAll(".primary,.nav-btn").forEach(btn=>{

btn.addEventListener("mousemove",(e)=>{

const rect=btn.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

btn.style.setProperty("--x",`${x}px`);
btn.style.setProperty("--y",`${y}px`);

});

});

/*=========================================
            FADE ON LOAD
=========================================*/

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});
/*=====================================
            FAQ
======================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

    const question=item.querySelector(".faq-question");

    question.addEventListener("click",()=>{

        faqItems.forEach(i=>{

            if(i!==item){

                i.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});
const loader = document.getElementById("loader");

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1800);

});
/*=====================================
        SCROLL PROGRESS BAR
======================================*/

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress =
        (scrollTop / documentHeight) * 100;

    progressBar.style.width = progress + "%";

});
/*=====================================
        NAVBAR SCROLL EFFECT
======================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});
/*=====================================
        SCROLL REVEAL
======================================*/

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        const trigger = window.innerHeight * 0.85;

        if(top < trigger){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();
/*=====================================
        IMAGE REVEAL
======================================*/

const images = document.querySelectorAll(".image-reveal");

function revealImages(){

    images.forEach(image=>{

        const top = image.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            image.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealImages);

revealImages();

/*=====================================
        SPOTLIGHT
======================================*/

window.addEventListener("mousemove",(e)=>{

document.body.style.setProperty("--x",e.clientX+"px");

document.body.style.setProperty("--y",e.clientY+"px");

});

/*=====================================
        TOP BUTTON
======================================*/

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

}