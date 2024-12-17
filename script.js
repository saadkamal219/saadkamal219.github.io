//navigation bar effects
window.addEventListener("scroll", function(){
    const header = this.document.querySelector("header");
    header.classList.toggle("sticky", this.window.scrollY > 0);
});

//project model pop up
const projectModels = document.querySelectorAll(".project-model");
const learnMoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
    projectModels[modalClick].classList.add("active");
}

learnMoreBtns.forEach((learnmoreBtn, i) => {
    learnmoreBtn.addEventListener("click", () => {
        modal(i);
    });
});

modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        projectModels.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

//scroll to top
const scrollToTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollToTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollToTopBtn.addEventListener("click", function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

//navigation menu iteams active on page scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
        }
        else{
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    });

});

//theme
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";

const getCurrentIcon = () => document.body.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if (savedTheme) {
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

//responsive nav bar
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", function(){
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", function(){
    navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", function(){
        navigation.classList.remove("active");
    });
});

//scroll animation
// ScrollReveal({ 
//     reset: true,
//     distance: '60px',
//     duration: 2500,
//     delay: 100
// });

// ScrollReveal().reveal('.home .info h2, .section-title-01', {delay: 500, origin: 'left'});
// ScrollReveal().reveal('.home .info h3, .home .info p, .section-title-02, .about-info .btn', {delay: 600, origin: 'right'});
// ScrollReveal().reveal('.home .info .btn', {delay: 700, origin: 'bottom'});
// ScrollReveal().reveal('.media-icons i, .contact-left li', {delay: 500, origin: 'left', interval: 200});
// ScrollReveal().reveal('.home-img', {delay: 500, origin: 'right'});
// ScrollReveal().reveal('.about-img', {delay: 500, origin: 'bottom'});
// ScrollReveal().reveal('.about .description, .copy-right', {delay: 600, origin: 'right'});
// ScrollReveal().reveal('.about .professional-list li', {delay: 500, origin: 'right', interval: 200});
// ScrollReveal().reveal('.skills-description, .contact-left h2', {delay: 700, origin: 'left'});
// ScrollReveal().reveal('.experience-card, .education, .portfolio, .img-card', {delay: 800, origin: 'bottom', interval: 200});
// ScrollReveal().reveal('footer .group', {delay: 500, origin: 'top', interval: 200});