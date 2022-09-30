let formulario = document.getElementById("formulario");
const div = document.getElementById("div");
const personas = [];
let contador = 0;

class Persona{
    constructor (info){
        this.nombre = info.nombre,
        this.turno = info.turno
    }
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputs = e.target.children;
    /* let nombre = inputs[1].value; */
    personas.push(new Persona({
        nombre : inputs[1].value,
        turno : contador + 1
    }
    ))
    contador ;
    console.log(personas);
})

personas.forEach(persona => {
    let turnopantalla = document.createElement("div")
    turnopantalla.innerHTML = `
    <h2>Nombre: ${persona.nombre}</h2>
    <h3>Turno: ${persona.turno}</h3>`
    div.append(turnopantalla);
})
