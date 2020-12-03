
//crear una funcion que cuente el numero de caracteres de una cadena

function myFunction( cadena ){
    if(!cadena){
        console.log('no hay cadena')
    }else
{
    console.log(`cadena tiene ${cadena.length} caracteres`)
    let ej = document.getElementById("ejemplo")
    document.write(`cadena tiene ${cadena.length} caracteres. `)
}

}

myFunction();
myFunction('hola mundo')

//programa una funcion que devuelva el texto recortado segun el numero de caracteres indicado

function myFunctionCut(valor ="", numero=undefined){
    if(!valor, !numero ){
        console.log('no hay cadena cortada');  
    }
    else if(!valor || !numero){
        console.log('no hay cadena cortada');  
    }

    else{
    console.log(`el valor es; ${valor.substr(0, numero)} `)
    document.write(`el valor es; ${valor.substr(0, numero)} `)
    }
}
myFunctionCut()
myFunctionCut("hola", 3)
myFunctionCut("hola")
myFunctionCut(8)

//programa una funcion que cada string del parametro lo devuelva como una cadena de arreglos

function fromStringToArray(valor = ""){

return console.log(valor.split(','))
}

fromStringToArray("hola, adios")


//programa una funcion que repita el parametro las mismas veces que le definamos

function repeat(valor="", numero=undefined){
    if( Math.sign(numero) == -1){
        const number=Math.abs(numero);
        console.warn('Hubo un problema, si quiso escribir el numero en positivo este es el resultado:')
        for(let i=1; i<=number; i++){
            console.warn(valor)
        }
    };
    if(!valor){console.log('no hay valor')}
    if(valor, numero){
        for(let i=1; i<=numero; i++){
        console.log(valor)
    }
    }
}
repeat("hola-mundo", 8)
repeat("hola-mundo", -89)


//----------------------------------------------------------------------------------------
//crea un metodo que tenga un array automatico, en el que vamos a calcular;
//el numero mayor
//numero menor
//media aritmetica
//cuantas veces parace el numero mayor

function aleaotry(){
    

    let badge = new Array(10).fill(0).map(() => Math.floor(Math.random() * 8));
    //numero mas alto
    let numeromaximo = Math.max(...badge);
    //numero mas bajo
    let numerominimo = Math.min(...badge);

    console.count(badge)
  
    document.write(`<h2>El numero mayor del arreglo es ${numeromaximo} </h2>`)
    document.write(`<h2>El numero menor del arreglo es ${numerominimo} </h2>`) 

    //la media aritmetica 
    let media = badge.length;
    let suma = badge.reduce((a, b) => a + b, 0);
    let total = suma / media;

    console.log(total);

    document.write(`<h2>la media aritmetica es ${total}</h2>`) 

    //contar las veces que se repite el numero maximo

    let count = "";

    for(let j=0; j < badge.length; j++){
            if(badge[j] === numeromaximo){
            console.log(badge[j])
                count++  
            }               
    }


    if(count >= 2){document.write(`<h2>El numero ${numeromaximo} se repite ${count} veces</h2>`) }
    else if (count = 1){document.write(`<h2>El numero ${numeromaximo} es el numero maximo y no se repite</h2>`) }

    console.info(`el numero mayor se repite en este ciclo  veces`)

}


aleaotry()

//============================================================================
//haz una funcion donde su parametro se pueda evaluar si es palindromo o no

function palindromo(lectura){

    lectura
    ?document.write(`<h2>la lectura de el metodo es ${lectura} :</h2>`)
    :document.write(`<h2>no escribio ningun parametro en el metodo</h2>`)
    
    let count = lectura.length;

    for (let i=1; i < count / 2; i++){
        if( lectura[i] != lectura[count-1-i]){
            return document.write(`<h2> - la palabra ${lectura.toLowerCase()} NO es un palindromo</h2>`)
        }
        return document.write(`<h2> - la palabra ${lectura.toLowerCase()} SI es un palindromo</h2>`)
    }

}
//palindromo("cualquier-palabra")
palindromo("oso")
palindromo("globo")
palindromo()


//============================================================================

