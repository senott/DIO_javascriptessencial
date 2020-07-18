let name = `default`;

function getName(){
  return name;
}

function setName(newName){
  name = newName;
}

export default {getName, setName};
