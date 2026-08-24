/* =========================================
   NAVEGAÇÃO SUAVE
========================================= */

document.querySelectorAll('nav a, .botao').forEach(link => {

    link.addEventListener('click', function (event) {

        const destino = this.getAttribute('href');

        if (!destino || !destino.startsWith('#')) {
            return;
        }

        const elemento = document.querySelector(destino);

        if (elemento) {

            event.preventDefault();

            elemento.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

        }

    });

});


/* =========================================
   HEADER AO ROLAR
========================================= */

const header = document.querySelector('header');

window.addEventListener('scroll', () => {

    if (!header) return;

    if (window.scrollY > 60) {

        header.style.padding = '13px 7%';

        header.style.boxShadow =
            '0 8px 30px rgba(0, 0, 0, 0.11)';

    } else {

        header.style.padding = '18px 7%';

        header.style.boxShadow =
            '0 5px 25px rgba(0, 0, 0, 0.07)';

    }

});


/* =========================================
   ANIMAÇÃO DOS ELEMENTOS
========================================= */

const elementosAnimados = document.querySelectorAll(
    '.numero, .card, .pergunta, .titulo, .texto, .video, .tabela'
);


const observador = new IntersectionObserver(

    (entradas) => {

        entradas.forEach(entrada => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add('aparecer');

                observador.unobserve(entrada.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


elementosAnimados.forEach(elemento => {

    elemento.classList.add('preparar-animacao');

    observador.observe(elemento);

});


/* =========================================
   BOTÃO VOLTAR AO TOPO
========================================= */

const botaoTopo = document.createElement('button');

botaoTopo.id = 'botaoTopo';

botaoTopo.setAttribute(
    'aria-label',
    'Voltar ao topo'
);

botaoTopo.innerHTML =
    '<i class="fa-solid fa-chevron-up"></i>';

document.body.appendChild(botaoTopo);


window.addEventListener('scroll', () => {

    if (window.scrollY > 500) {

        botaoTopo.classList.add('visivel');

    } else {

        botaoTopo.classList.remove('visivel');

    }

});


botaoTopo.addEventListener('click', () => {

    window.scrollTo({

        top: 0,

        behavior: 'smooth'

    });

});


/* =========================================
   DESTAQUE DO MENU
========================================= */

const secoes = document.querySelectorAll('section[id]');

const linksMenu = document.querySelectorAll('nav a');


window.addEventListener('scroll', () => {

    let secaoAtual = '';

    secoes.forEach(secao => {

        const distancia =
            secao.offsetTop - 180;

        if (window.scrollY >= distancia) {

            secaoAtual = secao.id;

        }

    });


    linksMenu.forEach(link => {

        link.classList.remove('menu-ativo');

        if (
            link.getAttribute('href') ===
            '#' + secaoAtual
        ) {

            link.classList.add('menu-ativo');

        }

    });

});


/* =========================================
   EFEITO NOS CARDS
========================================= */

document.querySelectorAll('.card').forEach(card => {

    card.addEventListener('mouseenter', () => {

        card.style.transition =
            'transform 0.3s ease, box-shadow 0.3s ease';

    });

});


/* =========================================
   ANIMAÇÃO DOS NÚMEROS
========================================= */

const numeros = document.querySelectorAll('.numero h3');


function animarNumero(elemento) {

    const textoOriginal = elemento.textContent.trim();

    const numero = parseInt(
        textoOriginal.replace(/\D/g, ''),
        10
    );

    if (isNaN(numero)) return;

    const possuiPorcentagem =
        textoOriginal.includes('%');

    let atual = 0;

    const duracao = 900;

    const inicio = performance.now();


    function atualizar(tempoAtual) {

        const progresso =
            Math.min(
                (tempoAtual - inicio) / duracao,
                1
            );

        atual = Math.floor(
            progresso * numero
        );

        elemento.textContent =
            atual +
            (possuiPorcentagem ? '%' : '');

        if (progresso < 1) {

            requestAnimationFrame(atualizar);

        } else {

            elemento.textContent =
                textoOriginal;

        }

    }


    requestAnimationFrame(atualizar);

}


const observadorNumeros = new IntersectionObserver(

    (entradas, observador) => {

        entradas.forEach(entrada => {

            if (entrada.isIntersecting) {

                animarNumero(entrada.target);

                observador.unobserve(entrada.target);

            }

        });

    },

    {
        threshold: 0.7
    }

);


numeros.forEach(numero => {

    observadorNumeros.observe(numero);

});


/* =========================================
   EFEITO DE ENTRADA DO HERO
========================================= */

window.addEventListener('load', () => {

    const heroTexto =
        document.querySelector('.hero-texto');

    if (!heroTexto) return;

    heroTexto.style.opacity = '0';

    heroTexto.style.transform =
        'translateY(30px)';

    setTimeout(() => {

        heroTexto.style.transition =
            'opacity 1s ease, transform 1s ease';

        heroTexto.style.opacity = '1';

        heroTexto.style.transform =
            'translateY(0)';

    }, 150);

});
