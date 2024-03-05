class Alumno {


    constructor(nombre, dni, direccion) {
        this._nombre = nombre;
        this._dni = dni;
        this._direccion = direccion;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(value) {
        this._nombre = value;
    }

    get dni() {
        return this._dni;
    }

    set dni(value) {
        this._dni = value;
    }

    get direccion() {
        return this._direccion;
    }

    set direccion(value) {
        this._direccion = value;
    }
}
function crearAlumnos(nombref,direccionf,dnif) {
    const alumno = new Alumno(nombref,direccionf,dnif);
    localStorage.setItem(alumno.dni, JSON.stringify(alumno));
    console.log("crearAlumnos");
}
window.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById("formulario");
    const nombre = document.getElementById("nombre");
    const direccion = document.getElementById("direccion");
    const dni = document.getElementById("dni");
    const guardar = document.getElementById("guardar");
    const mostrar = document.getElementById("mostrar");
    const divAlumnos = document.getElementById("alumnos");

    guardar.addEventListener('click', e => {
        e.preventDefault();
        console.log("guardar");
        crearAlumnos(nombre.value,direccion.value,dni.value)
    });



    mostrar.addEventListener('click', () =>{
        divAlumnos.innerHTML = '';
        var table = document.createElement('table');
        divAlumnos.appendChild(table);
        var thead = document.createElement("thead");
        table.appendChild(thead);
        var trhead = document.createElement("tr");
        thead.appendChild(trhead);
        var thDni = document.createElement('th');
        var thNombre = document.createElement('th');
        var thDireccion = document.createElement('th');
        trhead.appendChild(thDni);
        trhead.appendChild(thNombre);
        trhead.appendChild(thDireccion);
        thDni.innerHTML = "Dni";
        thNombre.innerHTML = "Nombre";
        thDireccion.innerHTML = "Direccion";
        var tbody = document.createElement("tbody");
        table.appendChild(tbody);
        for (let i = 0; i < localStorage.length; i++) {
            const alumno = JSON.parse(localStorage.getItem(localStorage.key(i)));
            var trbody = document.createElement("tr");
            tbody.appendChild(trbody);
            var tdDni = document.createElement('td');
            var tdNombre = document.createElement('td');
            var tdDireccion = document.createElement('td');
            var tdModificar = document.createElement('td');
            trbody.appendChild(tdDni);
            trbody.appendChild(tdNombre);
            trbody.appendChild(tdDireccion);
            trbody.appendChild(tdModificar);
            tdDni.innerHTML = alumno._dni;
            tdNombre.innerHTML = alumno._nombre;
            tdDireccion.innerHTML = alumno._direccion;
            var btnModificar = document.createElement('input');
            tdModificar.appendChild(btnModificar);
            btnModificar.type = "button";
            btnModificar.value = "modificar";
            btnModificar.id = "modificar";
        }
        });






});
