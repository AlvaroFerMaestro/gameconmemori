import { inicio } from "../../components/Pagina-Inicio/incio";
import "./whack-a-mole.css";

let contador = 0;
let animacionActiva = false;
let intervalo;

export const initmole = (divApp) => {
    divApp.innerHTML = ``;

    const containdiv = document.createElement("div");
    containdiv.classList = "containMain";

    const imgcarcel = document.createElement("img");
    imgcarcel.src = "/img/carcel.png";
    imgcarcel.classList = "imgcarcel";
    const imgmazo = document.createElement("img");
    imgmazo.src = "/img/mazo.png";
    imgmazo.classList = "cursorimg";
    const score = document.createElement("h3");
    score.classList = "score";
    score.textContent = contador;

    window.addEventListener("mousemove", (e) => {
        imgmazo.style.top = e.pageY + "px";
        imgmazo.style.left = e.pageX + "px";

        window.addEventListener("click", () => {
            imgmazo.style.animation = "hit 0.1s ease";
            setTimeout(() => {
                imgmazo.style.removeProperty("animation");
            }, 100);
        });
    });

    const btnPlay = document.createElement("button");
    btnPlay.classList = "btnPlay";
    btnPlay.textContent = "Start";
    const btnStop = document.createElement("button");
    btnStop.classList = "btnStop";
    btnStop.textContent = "Stop";

    const buttonInicio = document.createElement("button");
    buttonInicio.classList = "botonInicio";
    buttonInicio.textContent = "Inicio";
    buttonInicio.addEventListener("click", () => {
        inicio(divApp);
    });

    btnPlay.addEventListener("click", () => {
        animacionActiva = true;
        btnPlay.style.display = "none";
        btnStop.style.display = "inline-block";
        intervalo = setInterval(animacionJacob, 1000);
        alert("Atrapa a todos los Jacobitos que puedas!");
    });

    btnStop.addEventListener("click", () => {
        animacionActiva = false;
        btnStop.style.display = "none";
        btnPlay.style.display = "inline-block";
        clearInterval(intervalo);
    });

    containdiv.append(score);
    containdiv.append(imgmazo);
    containdiv.append(buttonInicio);
    containdiv.append(btnPlay);
    containdiv.append(btnStop);
    containdiv.append(imgcarcel);

    divApp.append(containdiv);
}

const animacionJacob = () => {
    if (!animacionActiva) return;

    const containdiv = document.querySelector(".containMain");
    const imgJacob = document.createElement("img");
    imgJacob.src = "/img/imagenjacob.png.png";
    imgJacob.classList = "imgJacob";

    imgJacob.addEventListener("click", arrestarJacobito);

    let randomLeft = Math.random() * (window.innerWidth - 100);
    let randomTop = Math.random() * (window.innerHeight - 300);
    imgJacob.style.left = `${randomLeft}px`;
    imgJacob.style.top = `${randomTop}px`;
    imgJacob.style.transform = `rotate(${Math.random() * 360}deg)`;

    containdiv.append(imgJacob);
}

const arrestarJacobito = (e) => {
    contador++;
    actualizarContador(contador);
    e.target.style.top = `${window.innerHeight - 130}px`;
    e.target.style.left = `${window.innerWidth - 120}px`;
}

const actualizarContador = (cont) => {
    const texto = document.querySelector(".score");
    texto.textContent = cont;
}
