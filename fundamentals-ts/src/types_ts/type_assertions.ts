// Afrimar algum tipo

let statusAtual:unknown = 1;

let changeStatus:number = 0;

// Afrimando que o status atual ẽ um numero
changeStatus = statusAtual as number

changeStatus = <number>statusAtual; // dessa forma tambẽm ẽ aceito.

console.log(changeStatus)