const div = document.getElementById("div")

const personas = [];
let contador = 0;

class Persona{
    constructor (info){
        this.nombre = info.nombre,
        this.turno = info.turno
    }
}

/* personas.push(new Persona(
    nombre = nombre,
    turno = contador + 1,
))

let nombre = prompt("ingrese su nombre"); */
for(contador; contador < 5; contador ++){
    nombre = prompt("ingrese su nombre");
    personas.push(new Persona({
        nombre : nombre,
        turno : contador + 1
    }
    ))
}

personas.forEach(persona => {
    let turnopantalla = document.createElement("div")
    turnopantalla.innerHTML = `
    <h2>Nombre: ${persona.nombre}</h2>
    <h3>Turno: ${persona.turno}</h3>`
    div.append(turnopantalla);
})
