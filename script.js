// ==============================
// ROLAGEM SUAVE DOS LINKS
// ==============================

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute('href'));

        destino.scrollIntoView({

            behavior:'smooth'

        });

    });

});

// ==============================
// DESTACAR MENU AO ROLAR
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", ()=>{

    let atual = "";

    sections.forEach(section=>{

        const topo = section.offsetTop - 150;
        const altura = section.clientHeight;

        if(pageYOffset >= topo){

            atual = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("ativo");

        if(link.getAttribute("href") == "#" + atual){

            link.classList.add("ativo");

        }

    });

});

// ==============================
// APARECER AO ROLAR
// ==============================

const elementos = document.querySelectorAll(

".card, .numero, .impacto, .pergunta, table"

);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{

threshold:0.15

});

elementos.forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(40px)";
el.style.transition=".8s";

observer.observe(el);

});

// ==============================
// BOTÃO VOLTAR AO TOPO
// ==============================

const botaoTopo = document.createElement("button");

botaoTopo.innerHTML="↑";

botaoTopo.id="topo";

document.body.appendChild(botaoTopo);

botaoTopo.style.position="fixed";
botaoTopo.style.right="25px";
botaoTopo.style.bottom="25px";
botaoTopo.style.width="50px";
botaoTopo.style.height="50px";
botaoTopo.style.border="none";
botaoTopo.style.borderRadius="50%";
botaoTopo.style.background="#2196f3";
botaoTopo.style.color="white";
botaoTopo.style.fontSize="22px";
botaoTopo.style.cursor="pointer";
botaoTopo.style.display="none";
botaoTopo.style.boxShadow="0 10px 20px rgba(0,0,0,.2)";
botaoTopo.style.transition=".3s";

window.addEventListener("scroll",()=>{

if(window.scrollY > 400){

botaoTopo.style.display="block";

}else{

botaoTopo.style.display="none";

}

});

botaoTopo.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// ==============================
// EFEITO NOS CARDS
// ==============================

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});

// ==============================
// ANO AUTOMÁTICO NO RODAPÉ
// ==============================

const rodape = document.querySelector("footer");

const ano = new Date().getFullYear();

rodape.innerHTML += `<p style="margin-top:15px;opacity:.7;">© ${ano}</p>`;