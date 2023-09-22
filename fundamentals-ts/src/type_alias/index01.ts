
type UUID = string | number | null;
function access(uuid: UUID , name: string) {
  console.log(`ID: ${uuid} - Bem vindo ${name}`);
}


function logUser(uuid: UUID) {
  console.log(`Conta referente ${uuid}`);

}

access('123', 'Gabriel');

logUser('123')