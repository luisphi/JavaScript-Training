/**
 * USO DE INTERFACES
 */

interface CamisetaBase {
    getColor();
}

/**
 * DECORADOR: Adicionar alguna propiedad extra a cualquier clase
 */
function estampar(logo:string) {
    return function(target: Function) {
        target.prototype.estampacion = function():void {
            console.log('La comiseta se ha estampado' + logo);
        }
    }
}

@estampar('Mi logo privaod')
class Camiseta implements CamisetaBase {
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: number;
    private precio: number;
    private stock: boolean;

    //Constructor 1
    constructor (color, modelo, marca, talla, precio, stock) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
        this.stock = stock;
    }

    // Luego crear todos los getter and setter
    public getColor(){}
}

/**
 * USO DE HERENCIA CREACION DE CLASE HIJA
 */
class Sudadera extends Camiseta {
    private capucha:boolean;

    setCapucha (capucha: boolean) {
        this.capucha = capucha;
    }
    getCapucha ():boolean {
        return this.capucha;
    }
}

// LLAMADA A LA CLASE
var camiseta = new Camiseta('blue','large','gest',34,78,true);

var sudadera = new Sudadera('red','large','gest',34,78,true);
sudadera.setCapucha(false);

console.log (sudadera);