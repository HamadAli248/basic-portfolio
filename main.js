const bar = document.getElementById("bar");
const times = document.getElementById("times");
const mobli = document.getElementById("mobli");
const navbarmob = document.getElementById("navbarmob");
const navbarmobex =document.getElementById("navbarmobex");
const navbarmobach =document.getElementById("navbarmobach");
const navbarmobpro =document.getElementById("navbarmobpro");
const navbarmobcon =document.getElementById("navbarmobcon");
times.style.display = "none";
mobli.style.display = "none";

bar.addEventListener("click", () => {
    times.style.display = "block";
    mobli.style.display = "block";
    bar.style.display = "none"
});

times.addEventListener("click", () => {
    times.style.display = "none";
    mobli.style.display = "none";
    bar.style.display = "block"
});

navbarmob.addEventListener("click", () => {
    times.style.display = "none";
    mobli.style.display = "none";
    bar.style.display = "block";
    
});

navbarmobex.addEventListener("click", () => {
    times.style.display = "none";
    mobli.style.display = "none";
    bar.style.display = "block";
    
});
navbarmobach.addEventListener("click", () => {
    times.style.display = "none";
    mobli.style.display = "none";
    bar.style.display = "block";
    
});
navbarmobpro.addEventListener("click", () => {
    times.style.display = "none";
    mobli.style.display = "none";
    bar.style.display = "block";
    
});
navbarmobcon.addEventListener("click", () => {
    times.style.display = "none";
    mobli.style.display = "none";
    bar.style.display = "block";
    
});
window.addEventListener('scroll', function() {
    document.getElementById('showScroll').innerHTML = pageYOffset + '100px';
  });

var shiftWindow = function() { scrollBy(5, -40) };
       window.addEventListener("hashchange", shiftWindow);
       function load() { if (window.location.hash) shiftWindow(); }
