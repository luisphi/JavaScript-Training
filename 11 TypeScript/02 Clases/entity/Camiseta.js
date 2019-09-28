/**
 * USO DE INTERFACES
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * DECORADOR: Adicionar alguna propiedad extra a cualquier clase
 */
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log('La comiseta se ha estampado' + logo);
        };
    };
}
var Camiseta = /** @class */ (function () {
    //Constructor 1
    function Camiseta(color, modelo, marca, talla, precio, stock) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
        this.stock = stock;
    }
    // Luego crear todos los getter and setter
    Camiseta.prototype.getColor = function () { };
    Camiseta = __decorate([
        estampar('Mi logo privaod')
    ], Camiseta);
    return Camiseta;
}());
/**
 * USO DE HERENCIA CREACION DE CLASE HIJA
 */
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
// LLAMADA A LA CLASE
var camiseta = new Camiseta('blue', 'large', 'gest', 34, 78, true);
var sudadera = new Sudadera('red', 'large', 'gest', 34, 78, true);
sudadera.setCapucha(false);
console.log(sudadera);
//# sourceMappingURL=Camiseta.js.map