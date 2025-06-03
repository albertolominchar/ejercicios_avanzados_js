const movies = [
  {
    title: 'Bracula: Condemor II',
    duration: 192,
    categories: ['comedia', 'aventura']
  },
  {
    title: 'Spider-Man: No Way Home',
    duration: 122,
    categories: ['aventura', 'acción']
  },
  {
    title: 'The Voices',
    duration: 223,
    categories: ['comedia', 'thriller']
  },
  {
    title: 'Shrek',
    duration: 111,
    categories: ['comedia', 'aventura', 'animación']
  }
]
const categorias = []
for (const movie of movies) {
  let catArray = movie.categories
  for (let i = 0; i < catArray.length; i++) {
    if (!categorias.includes(catArray[i])) {
      categorias.push(catArray[i])
    }
  }
}
console.log(categorias)
