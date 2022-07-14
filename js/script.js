const en = document.querySelectorAll('.en');
const br = document.querySelectorAll('.br');
const tituloBR = document.querySelector('.titulo.br');
const tituloEN = document.querySelector('.titulo.en');
const btnTradutor = document.querySelector('.btn-tradutor');
const btnRetornar = document.querySelector('.btn-retornar');

tituloBR.addEventListener('mouseenter', () => {
    btnRetornar.classList.add('active');
});

tituloBR.addEventListener('mouseout', () => {
    btnRetornar.classList.remove('active');
});


tituloEN.addEventListener('mouseout', () => {
    btnTradutor.classList.remove('active');
});

tituloEN.addEventListener('mouseenter', () => {
    btnTradutor.classList.add('active');
});

btnTradutor.addEventListener('mouseenter', () => {
    btnTradutor.classList.add('active');
});

btnTradutor.addEventListener('click', () => {
    en.forEach((item) => {
        item.classList.remove('active');
    });

    br.forEach((item) => {
        item.classList.add('active');
    });

    btnTradutor.classList.remove('active');
});


btnRetornar.addEventListener('mouseenter', () => {
    btnRetornar.classList.add('active');
});

btnRetornar.addEventListener('click', () => {
    en.forEach((item) => {
        item.classList.add('active');
    });

    br.forEach((item) => {
        item.classList.remove('active');
    });

    btnRetornar.classList.remove('active');
});