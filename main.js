let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
const cadenaNumeros = '0123456789'
const cadenaSimbolos = '!@#$%^&*()'
const cadenaMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'



let contraseña = document.getElementById('contrasena');

function generar(){
    let numeroDigitado = (parseInt(cantidad.value));

    
    if(numeroDigitado < 8){
        alert("la cantidad de caracteres tiene que ser mayor que 9");
    }else{

    let password = '';
    for(let i =0; i < numeroDigitado; i++ ){
        let CaracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        
        password = password + CaracterAleatorio;
    
    }
    contraseña.value = password;
    }
    
   }


function limpiar(){

contraseña.value = ("");
}






