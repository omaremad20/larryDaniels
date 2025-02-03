//SCROLL-BEHIVAIOR
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); } window.addEventListener("scroll", function () { const navbar = document.querySelector(".navbar"); const firstSection = document.querySelector("#HOME"); const sectionEnd = firstSection.offsetTop + firstSection.offsetHeight; if (window.scrollY > sectionEnd) { navbar.classList.add("scrolled"); } else { navbar.classList.remove("scrolled"); } });
//END-SCROLL-BEHIVAIOR

//ANMATION-SEC-ABOUT
document.addEventListener("DOMContentLoaded", function () { const aboutSection = document.querySelector("#ABOUT"); const progressBars = document.querySelectorAll(".progress-bar"); const options = { root: null, threshold: 0.5 }; const observer = new IntersectionObserver((entries, observer) => { entries.forEach(entry => { if (entry.isIntersecting) { progressBars.forEach(bar => { bar.style.animationPlayState = 'running'; }); observer.unobserve(entry.target); } }); }, options); observer.observe(aboutSection); });
//END-ANMATION-SEC-ABOUT

//ACTIVITION-LINKS
const sections = document.querySelectorAll('section'); const navLinks = document.querySelectorAll("nav .nav-link"); window.addEventListener('scroll', () => { let currentSection = ''; sections.forEach(section => { const sectionTop = section.offsetTop; const sectionHeight = section.clientHeight; if (pageYOffset >= sectionTop - sectionHeight / 3) { currentSection = section.getAttribute('id'); } }); navLinks.forEach(link => { link.classList.remove('active'); if (link.getAttribute('href').includes(currentSection)) { link.classList.add('active'); } }); });
//END-ACTIVITION-LINKS

//COUNTER 
const counterSection = document.querySelector('.sec-image'); const counters = document.querySelectorAll('.number-edit'); const startCounter = (counter, max) => { let count = 0; const interval = setInterval(() => { if (count >= max) { clearInterval(interval); } else { count += Math.ceil(max / 100); counter.textContent = count; } }, 20); }; const options = { root: null, threshold: 0.3, }; const observer = new IntersectionObserver((entries, observer) => { entries.forEach(entry => { if (entry.isIntersecting) { counters.forEach(counter => { const maxCount = parseInt(counter.textContent, 10); startCounter(counter, maxCount); }); observer.unobserve(counterSection); } }); }, options); observer.observe(counterSection);
//END-COUNTER 


function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); } window.addEventListener("scroll", function () { const navbar = document.querySelector(".navbar"); const firstSection = document.querySelector("#HOME"); const sectionEnd = firstSection.offsetTop + firstSection.offsetHeight; if (window.scrollY > sectionEnd) { navbar.classList.add("scrolled"); } else { navbar.classList.remove("scrolled"); } });
