const submitFunction = (event) => {
    // Este metodo previene que al hacer click en submit no se actualice 
    // la web
    event.preventDefault();
    validarFormulario();
}
// Esto escucha el envio del formulario
document.getElementById('formulario').addEventListener('submit',submitFunction);
function validarFormulario(){
    let camposTextos = document.querySelectorAll('input[type="text"]');
    let validacionCorrecta = true;
    // recorremos todos los input de tipo texto
    camposTextos.forEach(campo => {
        let errorCampo = document.getElementById('error'+campo.id.charAt(0).toUpperCase()
            +campo.id.slice(1));
        if (campo.value.length == '') {
            mostrarError(errorCampo, '¡Este campo es requerido!');
            validacionCorrecta = false;
        }else if(campo.value.length > 0 && campo.value.length<3){
            mostrarError(errorCampo,'¡Este campo debe tener al menos 3 caracteres!');
            validacionCorrecta = false;
        }else{
            ocultarError(errorCampo);
        }   
    })
}
// Esta funcion cuando haya un error se mostrara el msj de error
// como un elemento de bloque
const mostrarError = (elemento,mensaje) =>{
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}
// Esta funcion ocultará el error
const ocultarError = (elemento) =>{
    elemento.textContent = '';
    elemento.style.display = "none";
}