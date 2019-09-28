// Inicio para hacer Hola mundo desde una clase
// Para tener siempre excuchando los cambios desde consola tsc -p .
class Startup {
    public static main(): number {
        console.log('Hello Worlds');
        return 0;
    }
}

Startup.main();

// Tipos de datos 
let cadena: string = 'Luis Paz y Miño';
let edad: number = 32;
let bool: boolean = true;
let cualquiera: any = 'Hola';

// Multiples tipos de datos
let cadena2: string | number; cadena2 = 34;  cadena2 = 'luis';

// Arrays
var lenguajes: Array<String> = ['php','otro','python'];
let years: number[] = [12,45,67,8];

// TIPOS DE DATOS PERSONALIZADOS, GENERADOR DE ALIAS
type letrasNumeros = string | number;
let personalizado: letrasNumeros;

console.log(cadena, edad, bool, cualquiera, lenguajes, years); 