const prompt = require('prompt-sync')();
let nome = prompt('Nome: ');
let idade = parseInt(prompt('Idade: '));
let tipo = prompt('Tipo: ');

class criarHeroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let tiposPermitidos = ['guerreiro', 'mago', 'monge', 'ninja'];
    let permitido = tiposPermitidos.includes(this.tipo);
    let ataque;

    if (permitido) {
      if (this.tipo == 'guerreiro') {
        ataque = 'espada';
      } else if (this.tipo == 'mago') {
        ataque = 'magia';
      } else if (this.tipo == 'monge') {
        ataque = 'artes marciais';
      } else if (this.tipo == 'ninja') {
        ataque = 'shuriken';
      }

      console.log(`O tipo ${this.tipo} atacou usando ${ataque}.`);
    } else {
      console.log('Tipo inválido.');
    }
  }
}

let personagem = new criarHeroi(nome, idade, tipo);

personagem.atacar();
