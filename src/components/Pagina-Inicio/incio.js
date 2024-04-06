import { initializeMemoryGame } from "../../pages/memori/memori";
import { initmole } from "../../pages/whack-a-mole/whack-a-mole";
import "./inicio.css";

export const inicio = (divApp) => {
    const header = document.createElement ("header");
    const divh1 = document.createElement ("div")
    divh1.classList = ("divh1")
    const h1 = document.createElement ("h1")
    h1.textContent = "Los juegos de Alvaro"
    const main = document.createElement ("main");
    const buttonmemori = document.createElement ("button");
    buttonmemori.classList = ("buttonInicio")
    buttonmemori.textContent = "Memori"
    const buttonPpt = document.createElement ("button");
    buttonPpt.classList = ("buttonInicio")
    buttonPpt.textContent = "Piedra Papel o Tijera"
    const buttonWack = document.createElement ("button");
    buttonWack.classList = ("buttonInicio")
    buttonWack.textContent = "Jacobito-a-Mole"

    buttonWack.addEventListener("click", () =>{
        
        initmole(divApp);
    });
    divApp.innerHTML = ``
   buttonmemori.addEventListener("click", () =>{
    divApp.innerHTML = ``
   initializeMemoryGame(divApp)
   })
    
    main.append(buttonmemori);
    main.append(buttonPpt);
    main.append(buttonWack);

    header.append(divh1);
    divh1.append(h1);

    divApp.append(header);
    divApp.append(main)
}