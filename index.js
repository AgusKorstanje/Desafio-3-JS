let formulario = document.getElementById("formulario");
let div = document.getElementById("div");
const personas = [];
let contador = 0;

class Persona{
    constructor (persona){
        this.nombre = persona.nombre,
        this.turno = persona.turno
    }
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputs = e.target.children;
    personas.push(new Persona({
        nombre : inputs[1].value,
        turno : contador + 1
    }
    ))
    contador ++;
    personas.forEach(persona => {
        let turnopantalla = document.createElement("div");
        turnopantalla.innerHTML = `
        <h2>Nombre: ${persona.nombre}</h2>
        <h3>Turno: ${persona.turno}</h3>`
        div.append(turnopantalla);
    })
})

