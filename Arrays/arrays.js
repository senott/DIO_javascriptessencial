const persons = Array.of(`John`, `Cris`, `Jenny`);
const persons2 = Array(`John`, `Cris`, `Jenny`);

const numbersAndStrings = Array.of(1, 2, `string`, `text`);
const arrayWith3Positions = Array(3);

// Array from
const divs = document.querySelectorAll(`div`);
const arr = Array.from(divs);

/*
push: adicionar um ou mais elementos no final de um array, retornando o
tamanho do novo array
*/
const frutas = [`abacaxi`, `morango`];
const arrLength = frutas.push(`limão`);

/*
pop: remove o último elemento de um array e retorna o item removido
*/
const frutas = [`abacaxi`, `morango`, `limão`, `banana`];
frutas.pop();

/*
unshift: adiciona um ou mais elementos no início do array e retorna o tamanho
do novo array
*/
const frutas = [`abacaxi`, `morango`];
const arrLength = frutas.unshift(`limão`);

/*
shift: remove o primeiro elemento do array e retorna o elemento removido
*/
const frutas = [`abacaxi`, `morango`, `limão`, `banana`];
frutas.shift();

/*
concat: concatena um ou mais arrays retornando um novo array
*/
const frutas = [`abacaxi`, `morango`, `limão`, `banana`];
const salgados = [`coxinha`, `quibe`, `empada`];

const alimentos = frutas.concat(salgados);

/*
slice: retorna um novo array "fatiando" o array de acordo com início e fim
*/
const array = [1, 2, 3, 4, 5];
array.slice(0, 2);
array.slice(2);
array.slice(-1);
array.slice(-3);

/*
splice: altera um array adicionando novos elementos enquanto remove elementos
antigos
*/
const array = [1, 2, 3, 4, 5];
array.splice(2);
console.log(array);
array.splice(0, 0, 'first');
console.log(array);

/*
forEach: iteração de cada elemento do array
*/
const array = [1, 2, 3, 4, 5];
array.forEach((item, i) => {
  console.log(`${i}: ${item}`);
});

/*
map: retorna um novo array, de mesmo tamanho, iterando cada item de um array
*/
const array = [1, 2, 3, 4, 5];
array.map(value => value * 2);

/*
flat: retorna um novo array com todos os elementos de um sub-array concatenados
de forma recursiva de acordo com a profundidade especificada (depth)
*/
const arr = [1, 2, [3, 4]];
arr.flat();

/*
flatMap: retorna um novo array assim como a função map e executa um flat de
profundidade 1
*/
const array = [1, 2, 3, 4, 5];
array.flatMap(value => [value * 2]);
array.flatMap(value => [[value * 2]]);

/*
keys: retorna um array iterator que contém as chaves para cada elemento do array
*/
const array = [1, 2, 3, 4, 5];
const iterator = array.keys();
iterator.next();
iterator.next();
iterator.next();
iterator.next();
iterator.next();

/*
values: retorna um array iterator que contém os valores para cada elemento do array
*/
const array = [1, 2, 3, 4, 5];
const iterator = array.values();
iterator.next();
iterator.next();
iterator.next();
iterator.next();
iterator.next();

/*
entries: retorna um array iterator que contém os pares chave/valor de cada elemento
*/
const array = [1, 2, 3, 4, 5];
const iterator = array.entries();
iterator.next();
iterator.next();
iterator.next();
iterator.next();
iterator.next();

/*
find: retorna o primeiro item de um array que satisfaz a condição
*/
const array = [1, 2, 3, 4, 5];
const firstGreatherThanTwo = array.find(value => value > 2);

/*
findIndex: retorna o índice do primeiro item de um array que satisfaz a condição
*/
const array = [1, 2, 3, 4, 5];
const firstIndexGreatherThanTwo = array.findIndex(value => value > 2);

/*
filter: retorna um novo array com todos os itens que satisfazem a condição
*/
const array = [1, 2, 3, 4, 5];
const allValuesGreatherThanTwo = array.filter(value => value > 2);

/*
indexOf: retorna o primeiro índice em que um elemento pode ser encontrado no array
*/
const frutas = [`abacaxi`, `limão`, `morango`, `limão`, `banana`];
const firstIndexOfItem = frutas.indexOf(`limão`);

/*
lastIndexOf: retorna o último índice em que um elemento pode ser encontrado no array
*/
const frutas = [`abacaxi`, `limão`, `morango`, `limão`, `banana`];
const lastIndexOfItem = frutas.lastIndexOf(`limão`);

/*
includes: retorna um booleano verificando se determinado item existe no array
*/
const frutas = [`abacaxi`, `limão`, `morango`, `bergamota`, `banana`];
const temBerga = frutas.includes(`bergamota`);

/*
some: retorna um booleano verificando se pelo menos um item de um array satisfaz
a condição
*/
const array = [1, 2, 3, 4, 5];
const evenNumber = array.some(value => value % 2 === 0);

const students = [{name: `John`, grade: 7}, {name: `Jenny`, grade: 5}, {name: `Peter`, grade: 4}];
const approved = students.some(student => student.grade >= 7);

/*
every: retorna um booleano verificando se todos os itens de um array satisfazem
a condição
*/
const array = [1, 2, 3, 4, 5];
const allEvenNumber = array.every(value => value % 2 === 0);

/*
sort: ordena os elementos de um array de acordo com a condição
*/
const students = [{name: `John`, grade: 7}, {name: `Jenny`, grade: 5}, {name: `Peter`, grade: 4}];
students.sort((current, next) => current.grade - next.grade);

/*
reverse: inverte os elementos de um array
*/
const array = [1, 2, 3, 4, 5];
array.inverse();

/*
join: junta todos os elementos de um array, separados por um delimitador e
retorna uma string
*/
const frutas = [`abacaxi`, `limão`, `morango`, `bergamota`, `banana`];
frutas.join(`, `);

/*
reduce: retorna um novo tipo de dado iterando cada posição de um array
*/
const array = [1, 2, 3, 4, 5];
array.reduce((total, value) => total += value, 0);

const students = [{name: `John`, grade: 7}, {name: `Jenny`, grade: 5}, {name: `Peter`, grade: 4}];
students.reduce((average, student) => average += student.grade, 0) / students.length;
