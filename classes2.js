'use strict';

class Animal{
  constructor(qtdePatas){
    this.qtdePatas = 4;
  }

  movimentar(){}
}

class Cachorro extends Animal{
  constructor(morde){
    super(4);
    this.morde = morde;
  }

  latir(){
    console.log('Au! Au!');
  }
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);

console.log(pug);
console.log(pitbull);
