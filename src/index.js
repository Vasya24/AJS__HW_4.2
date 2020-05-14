import { findBy } from './findBy'

const data = [
  {name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями'},
  {name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием'},
  {name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса'},
];
const finder = findBy('type', 'attack');
const results = data.filter(finder);
console.log(results)

export { results }