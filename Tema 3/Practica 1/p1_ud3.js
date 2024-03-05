class Vehiculo {

    constructor(modelo, marca, precio, km) {
        this.modelo = modelo;
        this.marca = marca;
        this.precio = precio;
        this.km = km;
    }



}



function iniciar() {

    document.getElementById("enviar").onclick = recibirDatos;
    console.log("iniciar");
}
function mostrar(){
    document.getElementById("mostrar").onclick = mostrarArray;
}
const recibirDatos = (evt) => {
    evt.preventDefault();
    console.log("recibeDatos");
    contador++;
    let modelo = document.getElementById("modelo").value;
    let marca = document.getElementById("marca").value;
    let precio = document.getElementById("precio").value;
    let km = document.getElementById("km").value;

  let vehiculo = new Vehiculo( modelo, marca,precio, km);

    console.log(vehiculo);
    arrayVehiculos.push(vehiculo);

}
function mostrarArray() {
    let showText = document.createTextNode(arrayVehiculos);
}

let contador = 0;
let arrayVehiculos = [];
if (arrayVehiculos != null){

    document.getElementById("divVehiculos");
}

window.onload = iniciar;
