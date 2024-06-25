const submitFunction = (event) => {
    // Este metodo previene que al hacer click en submit no haga su funcion predefinida el boton
    if (!validarFormulario()) {
        event.preventDefault();
    }else{
        event.preventDefault();
        alert(
            'Los datos enviados fueron: '+ '\n' +
            'Nombre: '+document.getElementById('nombre').value + '\n'+
            'Apellido: '+document.getElementById('apellido').value + '\n'+
            'Edad: '+document.getElementById('edad').value + '\n'+
            'Documento: '+document.getElementById('documento').value + '\n'+
            'Email: '+document.getElementById('email').value + '\n'+
            'Actividad: '+document.getElementById('actividad').value + '\n'+
            'Nivel de estudios: '+document.getElementById('nivelEstudio').value + '\n'
        );
    }
}

// Esta funcion cuando haya un error se mostrara el msj de error como un elemento de bloque
const mostrarError = (elemento,mensaje) =>{
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}
// Esta funcion ocultará el error
const ocultarError = (elemento) =>{
    elemento.textContent = '';
    elemento.style.display = "none";
}
// Esto intercepta el click cuando se presiona el boton de registro del formulario
document.getElementById('formulario').addEventListener('submit',submitFunction);
function validarFormulario(){
    const camposTextos = document.querySelectorAll('input[type="text"]'); //Seleccionamos todos los inputs de tipo texto
    let validacionCorrecta = true;
    // recorremos todos los input de tipo texto
    camposTextos.forEach(campo => {
        // Este fragmento tomara la palabra error y la concatenara con la primera letra en mayuscula de extraer el campo id y juntarla con la palabra id
        // entonces quedaría por ejemplo errorNombre
        let errorCampo = document.getElementById('error'+campo.id.charAt(0).toUpperCase()
            +campo.id.slice(1));
        // Esto comprueba que el campo no este vacio
        if (campo.value.length == '') {
            mostrarError(errorCampo, '¡Este campo es requerido!');
            validacionCorrecta = false;
        //Esto comprueba que al menos se ingresen 3 caracteres en el input 
        }else if(campo.value.length > 0 && campo.value.length<3){
            mostrarError(errorCampo,'¡Este campo debe tener al menos 3 caracteres!');
            validacionCorrecta = false;
        }else{
            ocultarError(errorCampo);
        }   
    })
    // Validacion del mail
    const email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail');
    // Expresion regular para validar el formato del mail
    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value)) {
        ocultarError(errorEmail);
    }else{
        mostrarError(errorEmail,'¡Ingrese un correo electrónico válido!')
    }

    // Validacion de la edad
    const edad = document.getElementById('edad');
    const errorEdad = document.getElementById('errorEdad');
    if (edad.value < 18) {
        mostrarError(errorEdad,'¡Debes ser mayor de 18 años para registrarte!');
        validacionCorrecta = false;
    }else{
        ocultarError(errorEdad);
    }

    // Validacion de la actividad
    const actividad = document.getElementById('actividad');
    const errorActividad = document.getElementById('errorActividad');
    if (actividad.value ==  '') {
        mostrarError(errorActividad,'¡Selecciona una actividad!');
        validacionCorrecta = false;
    }else{
        ocultarError(errorActividad);
    }

    // Validacion de nivel de estudio
    const nivelEstudio = document.getElementById('nivelEstudio');
    const errorEstudio = document.getElementById('errorNivelEstudio');
    if (nivelEstudio.value == '') {
        mostrarError(errorEstudio,'¡Indica tu nivel de estudios alcanzados!');
        validacionCorrecta = false;
    }else{
        ocultarError(errorEstudio);
    }

    // Validacion terminos y condiciones
    const terminosCondiciones = document.getElementById('terminos');
    const errorTerminosCondiciones = document.getElementById('errorTerminos');
    if (!terminosCondiciones.checked) {
        mostrarError(errorTerminosCondiciones,'¡Revisar terminos y condiciones para poder continuar!');
        validacionCorrecta = false;
    }else{
        ocultarError(errorTerminosCondiciones);
    }
    // Esto determinara si el formulario es apto para el envio o no
    return validacionCorrecta;
}