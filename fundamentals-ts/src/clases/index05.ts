
class Game {
  private host: string;
  private id: string = '1'

  constructor(host: string, id: string) {
    this.host = host;
    this.id = id;
  }

  // Meteodo GET para pegar o valor ao inves de acessar diretamente a propriedade;
  get getHostIP() {
    console.log('GET');
    
    return this.host
  } 

  //Metodo SET serve alterar/passar algum atributo.

  set setHostIP(newip: string) {
     this.host = newip;
  }
}

const GTAV = new Game('176.899.6.10', '50')
GTAV.setHostIP= "127.1.1.0"
console.log(GTAV.getHostIP)