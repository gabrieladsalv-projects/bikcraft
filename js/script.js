// ativa links do menu

const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
    const url = location.href;
    const href = link.href;

    
    if (url.includes(href)) {
        link.classList.add('ativo')
    }
}


links.forEach(ativarLink)

// ativa items do orçamento


const parameters = new URLSearchParams(location.search)

function ativarProduto(parameter) {
    const element = document.getElementById(parameter);
    element.checked = true;
    console.log(parameter);
}

parameters.forEach(ativarProduto);


// perguntas frequentes

const questions = document.querySelectorAll('.questions button')

function activateQuestion (event) {
    const question = event.currentTarget;
    const controls = question.getAttribute('aria-controls');
    const answer = document.getElementById(controls);


    answer.classList.toggle('activate');
    question.setAttribute('aria-expanded', 'true')
}

function questionsEvent(question) {
    question.addEventListener('click', activateQuestion)
}

questions.forEach(questionsEvent);

// galeria de bicicletas


const gallery = document.querySelectorAll('.bike-image img')
const containerGallery = document.querySelector('.bike-image');

function changeImage(event) {
    const img = event.currentTarget;
    const media = matchMedia('(min-width: 1000px)').matches;
    if (media) {
        containerGallery.prepend(img);
    }
}

function galleryEvents(img) {
    img.addEventListener('click', changeImage);
}

gallery.forEach(galleryEvents);


// animação 

if(window.SimpleAnime) {
    new SimpleAnime();
}