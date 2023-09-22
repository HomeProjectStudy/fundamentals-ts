"use strict";
function access(uuid, name) {
    console.log(`ID: ${uuid} - Bem vindo ${name}`);
}
function logUser(uuid) {
    console.log(`Conta referente ${uuid}`);
}
access('123', 'Gabriel');
logUser('123');
