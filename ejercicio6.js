const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]
function swap(array, index1, index2) {
  const containerNum = array[index1]
  array[index1] = array[index2]
  array[index2] = containerNum
  return console.log(array)
}
swap(fantasticFour, 0, 3)
