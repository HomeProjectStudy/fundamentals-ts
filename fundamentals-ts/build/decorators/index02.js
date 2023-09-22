"use strict";
// Propriedade Decorator.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function validaNome(tamanho) {
    // target = cosntrutor da nossa classe
    // key = nossa propriedade
    return (target, key) => {
        let valor = target[key];
        const getter = () => valor;
        const setter = (value) => {
            if (value === "") {
                console.log("Você nao pode deixar em branco");
            }
            else if (value.length < tamanho) {
                // se for menor
                console.log("Você nao pode criar com esse tamanho");
            }
            else {
                valor = value;
            }
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    };
}
class Jogo {
    constructor(nome, titulo) {
        this.nome = nome;
        this.titulo = titulo;
    }
}
__decorate([
    validaNome(5),
    __metadata("design:type", String)
], Jogo.prototype, "nome", void 0);
__decorate([
    validaNome(15),
    __metadata("design:type", String)
], Jogo.prototype, "titulo", void 0);
const jogo1 = new Jogo("GTA 5 Online", "Jogo");
// console.log(jogo1.nome);
console.log(jogo1.titulo);
