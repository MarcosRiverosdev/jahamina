
/* ver mas ver menos gastronomia*/ 
function toggleText(button) {
    const text = button.previousElementSibling;
    if (text.style.display === "none" || text.style.display === "") {
        text.style.display = "block";
        button.textContent = "Ver menos";
    } else {
        text.style.display = "none";
        button.textContent = "Ver más";
    }
}


/* modal contenedor desplegable*/ 
const btnAbrirModal =
document.querySelector("#btn-abrir-modal");
const btnCerrarModal =
document.querySelector("#btn-cerrar-modal");
const modal =
document.querySelector("#modal");

btnAbrirModal.addEventListener("click",()=>{
    modal.showModal();
})

btnCerrarModal.addEventListener("click",()=>
{
    modal.close();
})


/* contador de likes*/ 


  /*  // Inicializamos el contador en 0
    let count = 0;

    // Función para incrementar el contador
    function increment() {
        count++;
        updateDisplay();
    }

    // Función para decrementar el contador
    function decrement() {
        count--;
        updateDisplay();
    }

    // Función para resetear el contador a 0
    function reset() {
        count = 0;
        updateDisplay();
    }

    // Función para actualizar la visualización del contador
    function updateDisplay() {
        document.getElementById('count').textContent = count;
    }*/



        /*carrusel nosotros*/ 

    