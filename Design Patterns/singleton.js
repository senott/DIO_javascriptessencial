function MyApp(){
  if(!MyApp.instance){
    MyApp.instance = this;
  }
  return MyApp.instance;
}

function Pessoa(){
  if(!Pessoa.instance){
    Pessoa.instance = this;
  }
  return Pessoa.instance;
}

const p = Pessoa.call({ name: "Chicó" });
const p2 = Pessoa.call({ name: "Mel" });

console.log(p);
console.log(p2);
