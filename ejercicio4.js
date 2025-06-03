//4.1
function findArrayIndex(array, text) {
  if (array.includes(text)) {
    return array.indexOf(text)
  } else {
    return console.log(`El nombre de ${text} no está incluido en el conjunto.`)
  }
}
//4.2
function removeItem(array, text) {
  if (typeof findArrayIndex(array, text) === 'number') {
    array.splice(findArrayIndex(array, text), 1)
    return console.log(array)
  }
}
const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]
let text = 'Chewbacca'

console.log(findArrayIndex(mainCharacters, text))
removeItem(mainCharacters, text)
