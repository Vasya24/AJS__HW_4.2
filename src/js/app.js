function findBy(one, two) {
  const res = [
    {name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями'},
    {name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием'},
    {name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса'},
  ];
  
  for (let i=0; i<res.length; i++) {
  let keys = Object.getOwnPropertyNames(res[i]);
  for (let k=0; k<keys.length; k++) {
    let name = keys[k];
  let val = Object.getOwnPropertyDescriptor(res[i], name).value;
  
  
  if (one == name && two == val) {
    console.log(res[i])
  }
  }
  }
  }
  findBy('type', 'attack')
  findBy('name', 'маг')
  
  