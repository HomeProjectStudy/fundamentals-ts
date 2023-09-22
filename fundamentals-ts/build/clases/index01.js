"use strict";
/*
 ### O que é  uma classe? ###
 >> Uma classe armazena as caracteristicas e as açoes que esse objeto vai possuir.
 >> Ou seja conjunto de atributos e metodos.
 */
class Loja {
    constructor(nome, categoria) {
        this.nome = nome;
        this.categoria = categoria;
    }
    criarLoja() {
        console.log(`Loja ${this.nome}, categoria: ${this.categoria}`);
    }
    emitirPedido(mesa, ...pedidos) {
        pedidos.map((pedido) => {
            console.log(`Saindo novo pedido: ${pedido}`);
        });
        return `Pedido na mesa: ${mesa}`;
    }
    mudarStatus(status) {
        if (status === "ABERTO") {
            console.log("LOJA ABERTA COM SUCESSO!");
        }
        else {
            console.log("LOJA FECAHDA!");
        }
    }
}
const redBurguer = new Loja("Red Burguer", "lanches");
//  console.log(redBurguer.nome)
// redBurguer.criarLoja()
// const retornoLoja = redBurguer.emitirPedido(48, "Suco Gelado", "Hamburguer duplo", "Coca 2L")
// console.log(retornoLoja);
redBurguer.mudarStatus("FECHADO");
