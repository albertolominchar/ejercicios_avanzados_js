const users = [
  {
    name: 'Alberto',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 50 },
      rain: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Antonio',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 30 },
      shower: { format: 'ogg', volume: 55 },
      train: { format: 'mp3', volume: 60 }
    }
  },
  {
    name: 'Santiago',
    favoritesSounds: {
      shower: { format: 'mp3', volume: 50 },
      train: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Laura',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 67 },
      wind: { format: 'ogg', volume: 35 },
      firecamp: { format: 'mp3', volume: 60 }
    }
  }
]

let totalVolume = 0
let soundArray = []
for (const user of users) {
  let favSounds = user.favoritesSounds
  for (const favSound in favSounds) {
    const sound = favSounds[favSound]
    totalVolume += sound.volume
  }
  let soundsKeys = Object.keys(favSounds)
  for (const soundKey of soundsKeys) {
    if (!soundArray.includes(soundKey)) {
      soundArray.push(soundKey)
    }
  }
}
const volumeAverage = totalVolume / soundArray.length
console.log(totalVolume)
console.log(soundArray.length)
console.log(
  'La media de todos los sonidos favoritos es ' + volumeAverage + ' segundos'
)
