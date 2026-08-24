/* =========================================
   NAVEGAÇÃO ATIVA
========================================= */

const links = document.querySelectorAll("nav a");

const secoes = document.querySelectorAll("section[id]");


function atualizarMenu() {

    let posicaoAtual = window.scrollY + 150;

    secoes.forEach((secao) => {

        const inicio = secao.offsetTop;

        const fim = inicio + secao.offsetHeight;

        const id = secao.getAttribute("id");

        if (posicaoAtual >= inicio && posicaoAtual < fim) {

            links.forEach((link) => {

                link.classList.remove("ativo");

            });

            const linkAtivo = document.querySelector(
                `nav a[href="#${id}"]`
            );

            if (linkAtivo) {

                linkAtivo.classList.add("ativo");

            }

        }

    });

}


window.addEventListener("scroll", atualizarMenu);

atualizarMenu();



/* =========================================
   BOTÃO VOLTAR AO TOPO
========================================= */

const botaoTopo = document.getElementById("voltar-topo");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        botaoTopo.style.display = "block";

    } else {

        botaoTopo.style.display = "none";

    }

});


botaoTopo.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



/* =========================================
   VERIFICAÇÃO DO VÍDEO
========================================= */

const video = document.querySelector(".video-container video");


if (video) {

    video.addEventListener("error", () => {

        console.log(
            "Não foi possível carregar o vídeo. " +
            "Confira se aquecimento-piscina.mp4 está na mesma pasta do index.html."
        );

    });

}
