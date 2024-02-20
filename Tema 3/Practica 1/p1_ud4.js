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
const recibirDatos = (evt) => {
    evt.preventDefault();
    console.log("recibeDatos");

    let modelo = document.getElementById("modelo").value;
    let marca = document.getElementById("marca").value;
    let precio = document.getElementById("precio").value;
    let km = document.getElementById("km").value;

  let vehiculo = new Vehiculo( modelo, marca,precio, km);

    console.log(vehiculo);
}

window.onload = iniciar;
