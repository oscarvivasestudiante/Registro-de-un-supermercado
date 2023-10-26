const listaSuper = document.getElementById("lista-super");
const input = document.getElementById("input-lista");
const botonAgregar = document.getElementById("boton-agregar");

botonAgregar.addEventListener("click", onClickAdd);
input.addEventListener("input", onTypeList);

function onClickAdd() {
    const inputValue = input.value.trim(); // Elimina espacios en blanco al principio y al final
    if (inputValue !== "") {
        const li = createListItem(inputValue);
        listaSuper.appendChild(li);
        input.value = "";
        botonAgregar.disabled = true;
        guardar();
    }
}

function onTypeList() {
    botonAgregar.disabled = input.value.trim().length === 0; // Comprueba si el valor está vacío o solo contiene espacios en blanco
}

function guardar() {
    Swal.fire({
        position: 'top-end',
        title: 'Producto Agregado Con Éxito',
        showConfirmButton: false,
        icon: 'success',
        timer: 1500
    });
}

function createListItem(name) {
    const listItem = document.createElement("li");
    const heading = document.createElement("span");
    heading.textContent = name;
    const botonEliminar = document.createElement("button");
    listItem.classList.add("lista-item");
    botonEliminar.textContent = "X";
    botonEliminar.id = "boton-eliminar";
    botonEliminar.addEventListener("click", onClickDelete);
    listItem.appendChild(heading);
    listItem.appendChild(botonEliminar);
    return listItem;
}

function onClickDelete() {
    this.parentNode.remove();
}
