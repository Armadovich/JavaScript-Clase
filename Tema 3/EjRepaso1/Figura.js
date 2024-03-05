function iniciar(){



    let objetoCuadrado = new Cuadrado();
    let botonCuadrado = document.getElementById("cuadrado");
    botonCuadrado.addEventListener("click",objetoCuadrado.dibujar);

    let objetoTriangulo = new Triangulo();
    let botonTriangulo = document.getElementById("triangulo");
    botonTriangulo.addEventListener("click",objetoTriangulo.dibujar);

    let objetoCirculo = new Circulo();
    let botonCirculo = document.getElementById("circulo");
    botonCirculo.addEventListener("click",objetoCirculo.dibujar);

    let borrar = document.getElementById("borrar");
    borrar.addEventListener("click",objetoCuadrado.borrar);
    borrar.addEventListener("click",objetoTriangulo.borrar);
    borrar.addEventListener("click",objetoCirculo.borrar);



}


class Figura {

    constructor() {
        if (this.constructor === Figura) throw new Error("La clase Forma es abstracto");
    }
    dibujar() {
        throw new Error("Este es un método abstracto y se debe sobreescribir en las subclases");
    };

    borrar(){
        throw new Error("Este es un método abstracto y se debe sobreescribir en las subclases")
    }

}

class Cuadrado extends Figura{

    dibujar() {
        console.log("dibujar cuadrado");
        let div = document.getElementById("figura");
        div.setAttribute("class","cuadrado");
    }

    borrar() {
        let div = document.getElementById("figura");
        div.removeAttribute("class");
    }
}


class Triangulo extends Figura{


    dibujar() {
        console.log("dibujar triangulo");
        let div = document.getElementById("figura");
        div.setAttribute("class","triangulo");
    }

    borrar() {
        let div = document.getElementById("figura");
        div.removeAttribute("class");
    }
}


class Circulo extends Figura{


    dibujar() {
        console.log("dibujar circulo");
        let div = document.getElementById("figura");
        div.setAttribute("class","circulo");
    }

    borrar() {
        let div = document.getElementById("figura");
        div.removeAttribute("class");
    }
}


window.onload = iniciar;