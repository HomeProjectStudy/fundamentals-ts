"use strict";
// Decorator Método, ele só é chamado quando nosso método for chamado em algum local.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function verificaPessoa(idade) {
    return (target, key, descriptor) => {
        // console.log("Target: ", target);
        // console.log("Key: ", key);
        // console.log("Descriptor: ", descriptor);
        const metodoOriginal = descriptor.value; // Salvar nosso metodo original
        // Reescrever nosso método.
        descriptor.value = function () {
            if (idade < 18) {
                console.log("Estamos cadastrando como Pessoa menor de idade");
                // Agora queremos retornar o metodo original para ele ser executado
                return metodoOriginal.apply(this);
            }
            else {
                console.log("Adulto cadastrado no sistema");
                // Agora queremos retornar o metodo original para ele ser executado
                return metodoOriginal.apply(this);
            }
        };
    };
}
class People {
    constructor(nome) {
        this.nome = nome;
    }
    cadastrarPessoa() {
        console.log(`Bem vindo ${this.nome} ao sistema.`);
    }
}
__decorate([
    verificaPessoa(16),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], People.prototype, "cadastrarPessoa", null);
const pessoa1 = new People("Matheus F");
pessoa1.cadastrarPessoa();
