// ===============================
// MENU SUAVE
// ===============================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if(destino){

            destino.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// ===============================
// HEADER AO ROLAR
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 80){

        header.style.background = "rgba(255,255,255,.98)";
        header.style.boxShadow = "0 12px 30px rgba(0,0,0,.12)";
        header.style.padding = "14px 8%";

    }else{

        header.style.background = "rgba(255,255,255,.93)";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.08)";
        header.style.padding = "18px 8%";

    }

});


// ===============================
// APARECER AO ROLAR
// ===============================

const elementos = document.querySelectorAll(

".card,.numero,.pergunta,.titulo,.texto,.video,.tabela"

);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";

}

});

},{

threshold:.15

});

elementos.forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(40px)";
el.style.transition=".8s";

observer.observe(el);

});


// ===============================
// BOTÃO VOLTAR AO TOPO
// ===============================

const topo = document.createElement("button");

topo.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';

document.body.appendChild(topo);

topo.style.position = "fixed";
topo.style.right = "25px";
topo.style.bottom = "25px";
topo.style.width = "55px";
topo.style.height = "55px";
topo.style.border = "none";
topo.style.borderRadius = "50%";
topo.style.background = "#2196f3";
topo.style.color = "white";
topo.style.fontSize = "20px";
topo.style.cursor = "pointer";
topo.style.display = "none";
topo.style.boxShadow = "0 15px 35px rgba(0,0,0,.25)";
topo.style.transition = ".3s";
topo.style.zIndex = "999";

window.addEventListener("scroll", ()=>{

if(window.scrollY > 400){

topo.style.display = "block";

}else{

topo.style.display = "none";

}

});

topo.addEventListener("click", ()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


// ===============================
// EFEITO NOS CARDS
// ===============================

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});


// ===============================
// DESTACAR MENU
// ===============================

const secoes = document.querySelectorAll("section");

const links = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let atual = "";

secoes.forEach(sec=>{

const topo = sec.offsetTop - 200;

if(pageYOffset >= topo){

atual = sec.getAttribute("id");

}

});

links.forEach(link=>{

link.style.color="#1b4965";
link.style.fontWeight="500";

if(link.getAttribute("href")=="#"+atual){

link.style.color="#2196f3";
link.style.fontWeight="700";

}

});

});


// ===============================
// CONTADOR DOS NÚMEROS
// ===============================

const numeros = document.querySelectorAll(".numero h3");

numeros.forEach(numero=>{

const texto = numero.innerText;

const valor = parseInt(texto);

if(!isNaN(valor)){

let atual = 0;

const intervalo = setInterval(()=>{

atual++;

numero.innerText = atual;

if(atual>=valor){

clearInterval(intervalo);

numero.innerText = texto;

}

},25);

}

});


// ===============================
// ANIMAÇÃO DO HERO
// ===============================

window.addEventListener("load",()=>{

const hero = document.querySelector(".hero-texto");

hero.style.opacity="0";
hero.style.transform="translateY(40px)";

setTimeout(()=>{

hero.style.transition="1.2s";

hero.style.opacity="1";
hero.style.transform="translateY(0)";

},300);

});
