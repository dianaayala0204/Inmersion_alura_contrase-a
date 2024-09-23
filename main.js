let cantidad_caracteres = document.getElementById ('cantidad');
let boton_generar = document.getElementById('generar');
let contraseña = document.getElementById('contrasena');
let boton_limpiar = document.getElementById('limpiar');
let mensaje = document.getElementById('mensaje');

const cadena_caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"

function generar() {

    let numero_dijitado = parseInt(cantidad_caracteres.value);
    /*console.log (numero_dijitado);*/

    if (numero_dijitado < 8) {
        alert ("La cantidad de caracteres tiene que ser mayor que 8");
        
        //Evita que continúe generando la contraseña si la cantidad es menor a 8
        return;
    }
    let password = ''
    for (let i = 0; i < numero_dijitado; i++) {
        let caracter_aleatorio = cadena_caracteres [Math.floor(Math.random() * cadena_caracteres.length)];
        /*console.log (caracter_aleatorio)*/

        password+=caracter_aleatorio;
    }

    /*console.log ('password generada' + password);*/
    contraseña.value = password;
    validar_contraseña(password);


}

function validar_contraseña (contrasena) {
    //Esta expresión define un patrón de caracteres que representa una contraseña segura

        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    //El metodo 'regex. test' compara la contraseña ingresada por el usuario con la expresión
    //Una expresión regular es una secuencia de caracteres que define un patrón de búsqueda
    //Supongamos que queremos encontrar todas las palabras que comienzan con la letra "A" en un texto

        if (regex.test(contrasena)) {
            mensaje.textContent = "La contraseña es fuerte";
        } else {
            mensaje.textContent = "La contraseña es débil";
        }
    }

function limpiar() {
    document.getElementById ('cantidad').value = "";
    document.getElementById('contrasena').value = "";
    mensaje.textContent = ""
}
//Cuando se haga clic en el elemento con el ID 'Limpiar', ejecuta la función 'limpiar()'

boton_limpiar.addEventListener('click', limpiar);



