// navbar mobile 
const navMobile = document.querySelector('.nav-mobile');

// function navbar mobile open and close
const navOpenClose = () => {
    navMobile.classList.toggle("nav-open-close");
}

// function scroll 

const scrollPage = (e) => {
    let el = document.querySelector(`${e}`);
    el.scrollIntoView({
        behavior: 'smooth',
    });
}

// function load screen  

const container = document.querySelector('.container')
const loader = document.querySelector('.loader')
const loadScreen = () => {
    container.style.display = 'block';
    loader.style.display = 'none';
    document.querySelector('body').style.display = 'block';
}

window.addEventListener('load', loadScreen())
