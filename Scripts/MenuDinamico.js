let header = document.getElementById("header");
let nav = document.getElementById("nav");

document.querySelector('.btnMenu').addEventListener('click', function(){
    header.classList.add('menuHeader');
    nav.classList.add('menu');
    document.getElementById('iconI').style.color = "transparent";
});

document.querySelector('.nav').addEventListener('click', function(){
    header.classList.remove('menuHeader');
    nav.classList.remove('menu');
    document.getElementById('iconI').style.color = "white";
});

document.querySelector('.logo').addEventListener('click', function(){
    header.classList.remove('menuHeader');
    nav.classList.remove('menu');
    document.getElementById('iconI').style.color = "white";
});

document.querySelector('.body').addEventListener('click', function(){
    header.classList.remove('menuHeader');
    nav.classList.remove('menu');
    document.getElementById('iconI').style.color = "white";
    console.log("n");
});
