import './style.css'
const aventuras = [
  {
    name: 'Cine de verano en la playa',
    price: 20,
    stars: 5,
    reviews: 200,
    seller: 'Ayuntamiento Calpe',
    image:
      'https://i.pinimg.com/564x/07/e1/26/07e12600b3a45d293d39ed9c5cca0aad.jpg'
  },
  {
    name: 'Carrera acuática',
    price: 70,
    stars: 4,
    reviews: 100,
    seller: 'Wave Deporte Aventura',
    image:
      'https://i.pinimg.com/originals/45/2d/cf/452dcf0054cc831f0635bbfe18ce54e0.jpg'
  },
  {
    name: 'Parasailing',
    price: 50,
    stars: 3,
    reviews: 35,
    seller: 'Wave Deporte Aventura',
    image:
      'https://i.pinimg.com/564x/e3/67/16/e36716c2d5fb618a38f153e7c7436a43.jpg'
  },
  {
    name: 'Bautismo de Buceo',
    price: 80,
    stars: 5,
    reviews: 150,
    seller: 'Wave Deporte Aventura',
    image:
      'https://i.pinimg.com/564x/94/d0/6a/94d06ac94f4101c5ecf7acf8a2774170.jpg'
  },
  {
    name: 'Aprende a surfear en un día',
    price: 55,
    stars: 4,
    reviews: 130,
    seller: 'Escuela Surfing',
    image:
      'https://i.pinimg.com/564x/93/3e/ee/933eeed439b9ce89aca27fe53b421dd5.jpg'
  },
  {
    name: 'Surf para surferos',
    price: 40,
    stars: 3,
    reviews: 49,
    seller: 'Escuela Surfing',
    image:
      'https://i.pinimg.com/564x/eb/f8/c5/ebf8c53df070fcb78641b4e69ebe471b.jpg'
  },
  {
    name: 'Descubre las calas más bonitas del levante',
    price: 35,
    stars: 3,
    reviews: 67,
    seller: 'Rutas Verdes',
    image:
      'https://i.pinimg.com/564x/4a/00/44/4a00446fbddcf60e98a8c364a28f49e0.jpg'
  },
  {
    name: 'Puenting',
    price: 42,
    stars: 4,
    reviews: 73,
    seller: 'No Fear No Gain',
    image:
      'https://i.pinimg.com/564x/1c/df/39/1cdf3942eb03d870887b34cbcd66cf32.jpg'
  },
  {
    name: 'Tirolina sobre el mar',
    price: 30,
    stars: 5,
    reviews: 66,
    seller: 'No Fear No Gain',
    image:
      'https://i.pinimg.com/564x/65/45/11/6545119abf2bb1e5ae173cdf68b24a05.jpg'
  },
  {
    name: 'Fiesta privada en nuestro yate',
    price: 70,
    stars: 5,
    reviews: 110,
    seller: 'Hotel Royal',
    image:
      'https://i.pinimg.com/564x/42/1d/7a/421d7a53af907a52ed1717e176419184.jpg'
  }
]
const printAventuras = () => {
  const sectionaventuras = document.querySelector('#aventuras')
  for (const aventura of aventuras) {
    const divAventura = document.createElement('div')
    divAventura.className = 'aventura'
    const imgAventura = document.createElement('img')

    const tituloAventura = document.createElement('h2')

    const precioAventura = document.createElement('p')

    const sellerAventura = document.createElement('p')

    const reviewsAventura = document.createElement('p')

    tituloAventura.textContent = aventura.name
    precioAventura.textContent = aventura.price + '€'
    sellerAventura.textContent = aventura.seller
    reviewsAventura.textContent = 'Ver ' + aventura.reviews + ' opiniones'
    reviewsAventura.id = 'reviews'
    imgAventura.src = aventura.image

    const estrellasContainer = document.createElement('div')
    estrellasContainer.classList.add('estrellas-container')
    const puntuacion = aventura.stars
    for (let i = 0; i < 5; i++) {
      const estrellaImg = document.createElement('img')
      estrellaImg.classList.add('estrella')
      if (i < puntuacion) {
        estrellaImg.src =
          'https://icones.pro/wp-content/uploads/2021/02/icone-etoile-verte.png'
      } else {
        estrellaImg.src =
          'https://icones.pro/wp-content/uploads/2021/02/icone-etoile-vide-verte.png'
      }
      estrellasContainer.appendChild(estrellaImg)
    }

    divAventura.appendChild(imgAventura)
    divAventura.appendChild(tituloAventura)
    divAventura.appendChild(precioAventura)
    divAventura.appendChild(sellerAventura)
    divAventura.appendChild(reviewsAventura)
    divAventura.appendChild(estrellasContainer)

    sectionaventuras.appendChild(divAventura)
  }
}
printAventuras()

document.addEventListener('DOMContentLoaded', function () {
  var header = document.getElementById('myHeader')
  var enlaceMiCuenta = document.createElement('a')
  var enlaceCarrito = document.createElement('a')
  var inputBusqueda = document.createElement('input')
  var nombreMarca = document.createElement('h1')
  var enlacesImagenes = document.createElement('div')

  video.src = './assets/video.mp4'
  enlacesImagenes.className = 'enlaces-imagenes'
  nombreMarca.className = 'marca'
  nombreMarca.textContent = 'aventurarse'
  inputBusqueda.type = 'text'
  inputBusqueda.placeholder = 'Buscar productos'
  inputBusqueda.classList = 'filtro-letras'
  enlaceMiCuenta.href = '#'
  enlaceMiCuenta.innerHTML = '<img src="./assets/user.png" alt="Mi Cuenta">'
  enlaceCarrito.href = '#'
  enlaceCarrito.innerHTML = '<img src="./assets/carrito.png" alt="Carrito">'
  enlacesImagenes.appendChild(enlaceCarrito)
  enlacesImagenes.appendChild(enlaceMiCuenta)
  header.appendChild(nombreMarca)
  header.appendChild(enlacesImagenes)
  header.appendChild(inputBusqueda)

  const sectionaventuras = document.querySelector('#aventuras')

  inputBusqueda.addEventListener('input', function (event) {
    const textoBusqueda = event.target.value.toLowerCase()
    const sectionaventuras = document.querySelector('#aventuras')
    sectionaventuras.innerHTML = ''
    if (textoBusqueda === '') {
      printAventuras()
      return
    }
    const resultados = aventuras.filter((aventura) =>
      aventura.name.toLowerCase().includes(textoBusqueda)
    )

    if (resultados.length > 0) {
      resultados.forEach((aventura) => {
        const divAventura = crearElementoAventura(aventura)
        sectionaventuras.appendChild(divAventura)
      })
    } else {
      const noHayResultados = document.createElement('p')
      noHayResultados.textContent = 'No hay resultados'
      sectionaventuras.appendChild(noHayResultados)
    }
    mostrarProductosRecomendados(sectionaventuras)
  })
})
function crearElementoAventura(aventura) {
  const divAventura = document.createElement('div')
  divAventura.className = 'aventura'
  const imgAventura = document.createElement('img')

  const tituloAventura = document.createElement('h2')

  const precioAventura = document.createElement('p')

  const sellerAventura = document.createElement('p')

  const reviewsAventura = document.createElement('p')

  tituloAventura.textContent = aventura.name
  precioAventura.textContent = aventura.price + '€'
  sellerAventura.textContent = aventura.seller
  reviewsAventura.textContent = 'Ver ' + aventura.reviews + ' opiniones'
  reviewsAventura.id = 'reviews'
  imgAventura.src = aventura.image

  const estrellasContainer = document.createElement('div')
  estrellasContainer.classList.add('estrellas-container')
  const puntuacion = aventura.stars
  for (let i = 0; i < 5; i++) {
    const estrellaImg = document.createElement('img')
    estrellaImg.classList.add('estrella')
    if (i < puntuacion) {
      estrellaImg.src =
        'https://icones.pro/wp-content/uploads/2021/02/icone-etoile-verte.png'
    } else {
      estrellaImg.src =
        'https://icones.pro/wp-content/uploads/2021/02/icone-etoile-vide-verte.png'
    }
    estrellasContainer.appendChild(estrellaImg)
  }

  divAventura.appendChild(imgAventura)
  divAventura.appendChild(tituloAventura)
  divAventura.appendChild(precioAventura)
  divAventura.appendChild(sellerAventura)
  divAventura.appendChild(reviewsAventura)
  divAventura.appendChild(estrellasContainer)

  return divAventura
}
function mostrarProductosRecomendados(sectionaventuras) {
  console.log('soy productos recomendados')
  const divRecomendado = document.createElement('section')
  divRecomendado.className = 'section-recomendados'
  const tituloRecomendado = document.createElement('h3')
  tituloRecomendado.className = 'productos-recomendados'
  tituloRecomendado.textContent = 'Productos similares'
  divRecomendado.appendChild(tituloRecomendado)
  sectionaventuras.appendChild(divRecomendado)

  const productosSugeridos = obtenerProductosAleatorios(aventuras, 4)

  productosSugeridos.forEach((producto) => {
    const divAventura = crearElementoAventura(producto)
    divRecomendado.appendChild(divAventura)
  })

  sectionaventuras.appendChild(divRecomendado)
}

function obtenerProductosAleatorios(productos, num) {
  const productosAleatorios = []
  const productosCopia = [
    {
      name: 'Cine de verano en la playa',
      price: 20,
      stars: 5,
      reviews: 200,
      seller: 'Ayuntamiento Calpe',
      image:
        'https://i.pinimg.com/564x/07/e1/26/07e12600b3a45d293d39ed9c5cca0aad.jpg'
    },
    {
      name: 'Carrera acuática',
      price: 70,
      stars: 4,
      reviews: 100,
      seller: 'Wave Deporte Aventura',
      image:
        'https://i.pinimg.com/originals/45/2d/cf/452dcf0054cc831f0635bbfe18ce54e0.jpg'
    },
    {
      name: 'Parasailing',
      price: 50,
      stars: 3,
      reviews: 35,
      seller: 'Wave Deporte Aventura',
      image:
        'https://i.pinimg.com/564x/e3/67/16/e36716c2d5fb618a38f153e7c7436a43.jpg'
    },
    {
      name: 'Bautismo de Buceo',
      price: 80,
      stars: 5,
      reviews: 150,
      seller: 'Wave Deporte Aventura',
      image:
        'https://i.pinimg.com/564x/94/d0/6a/94d06ac94f4101c5ecf7acf8a2774170.jpg'
    },
    {
      name: 'Aprende a surfear en un día',
      price: 55,
      stars: 4,
      reviews: 130,
      seller: 'Escuela Surfing',
      image:
        'https://i.pinimg.com/564x/93/3e/ee/933eeed439b9ce89aca27fe53b421dd5.jpg'
    },
    {
      name: 'Surf para surferos',
      price: 40,
      stars: 3,
      reviews: 49,
      seller: 'Escuela Surfing',
      image:
        'https://i.pinimg.com/564x/eb/f8/c5/ebf8c53df070fcb78641b4e69ebe471b.jpg'
    },
    {
      name: 'Descubre las calas más bonitas del levante',
      price: 35,
      stars: 3,
      reviews: 67,
      seller: 'Rutas Verdes',
      image:
        'https://i.pinimg.com/564x/4a/00/44/4a00446fbddcf60e98a8c364a28f49e0.jpg'
    },
    {
      name: 'Puenting',
      price: 42,
      stars: 4,
      reviews: 73,
      seller: 'No Fear No Gain',
      image:
        'https://i.pinimg.com/564x/1c/df/39/1cdf3942eb03d870887b34cbcd66cf32.jpg'
    },
    {
      name: 'Tirolina sobre el mar',
      price: 30,
      stars: 5,
      reviews: 66,
      seller: 'No Fear No Gain',
      image:
        'https://i.pinimg.com/564x/65/45/11/6545119abf2bb1e5ae173cdf68b24a05.jpg'
    },
    {
      name: 'Fiesta privada en nuestro yate',
      price: 70,
      stars: 5,
      reviews: 110,
      seller: 'Hotel Royal',
      image:
        'https://i.pinimg.com/564x/42/1d/7a/421d7a53af907a52ed1717e176419184.jpg'
    }
  ]

  for (let i = 0; i < num; i++) {
    if (productosCopia.length === 0) break
    const indiceAleatorio = Math.floor(Math.random() * productosCopia.length)
    productosAleatorios.push(productosCopia.splice(indiceAleatorio, 1)[0])
  }

  return productosAleatorios
}

const sectionfilter = document.querySelector('.filter')

const filtroselect = document.createElement('select')
filtroselect.name = 'Vendedor'

const options = [
  'Selecciona un vendedor',
  'Ayuntamiento Calpe',
  'Wave Deporte Aventura',
  'Escuela Surfing',
  'Rutas Verdes',
  'No Fear No Gain',
  'Hotel Royal'
]
options.forEach((optionText) => {
  const option = document.createElement('option')
  option.value = optionText
  option.text = optionText
  filtroselect.appendChild(option)
})
sectionfilter.appendChild(filtroselect)

filtroselect.addEventListener('change', (e) => {
  const vendedorSeleccionado = e.target.value
  console.log(e.target.value, 'soy el vendedor')

  if (vendedorSeleccionado !== 'Selecciona un vendedor') {
    const productosFiltrados = aventuras.filter(
      (producto) => producto.seller === vendedorSeleccionado,
      console.log('hola')
    ) // el método filter filtra los elementos de aventuras cuyo vendedor coincide con el seleccionado por el usuario
    mostrarProductos(productosFiltrados)
  } else {
    mostrarProductos(aventuras)
  }
})

function mostrarProductos(productos) {
  const sectionaventuras = document.querySelector('#aventuras')
  sectionaventuras.innerHTML = ''
  productos.forEach((producto) => {
    const divAventura = crearElementoAventura(producto)
    sectionaventuras.appendChild(divAventura)
  })
}
const filtroPrecio = document.createElement('input')
filtroPrecio.type = 'number'
filtroPrecio.placeholder = 'Buscar precio'
filtroPrecio.className = 'filtro-precio'

filtroPrecio.addEventListener('input', function (event) {
  const precioBusqueda = event.target.value
  console.log('buscando precio')
  for (const aventura of aventuras) {
    if (aventura.price <= precioBusqueda) {
      const preciosFiltrados = aventuras.filter(
        (precios) => precios.price <= precioBusqueda
      )
      mostrarProductos(preciosFiltrados)
    } else if (precioBusqueda == '') {
      mostrarProductos(aventuras)
    }
  }
})
sectionfilter.appendChild(filtroPrecio)

const botonLimpiar = document.createElement('button')
botonLimpiar.textContent = 'Limpiar Filtros'
botonLimpiar.addEventListener('click', (e) => {
  mostrarProductos(aventuras)
  ;(filtroPrecio.value = ''),
    (filtroPrecio.placeholder = 'Buscar precio'),
    (filtroselect.value = 'Selecciona un vendedor')
})

sectionfilter.appendChild(botonLimpiar)
