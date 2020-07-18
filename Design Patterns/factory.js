function Pessoa(CustomProperties){
  return {
    name: "Guilherme",
    lastname: "Silva",
    ...CustomProperties
  }
}

const p = Pessoa({name: 'Custom Name', age: 30});

console.log(p);
