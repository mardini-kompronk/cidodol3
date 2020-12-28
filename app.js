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


