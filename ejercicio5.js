function rollDice(faces) {
  if (faces <= 0) {
    console.log('Introduce un número de caras válido')
    return
  }
  const randomNumber = Math.random(faces)
  const result = Math.floor(randomNumber * faces) + 1
  return console.log(result)
}
rollDice(9)
