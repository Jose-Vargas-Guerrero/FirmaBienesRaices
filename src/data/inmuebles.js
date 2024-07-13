const inmuebles = [
    {
        codigo:"F001",
        url: 'Apartamento-amueblado1',
        nombre: 'Apartamento amueblado',
        medidas: '150 M2 - 214.7 V2',
        habitaciones: 3,
        estacionamiento: 1,
        precio: "800.000",
        disponible: true,
        categoria: 'Apartamento',
        descripcion: 'The majestic Penthouse A residence boasts 6,415 sqft with 4 bedrooms, 4 full baths and a powder room plus a 834-sqft glass-wrapped loggia meticulously-designed by AD100 architect, John Pawson. Breath-taking panoramic views from every room with floor-to-ceiling windows and sliding walls of glass open to the loggia creating a sprawling indoor/outdoor living space with sweeping views from Downtown LA to the ocean. Elegantly-designed teak and Basaltina stone Molteni kitchen offers a dramatic island and top-of-the-line Miele appliances.', 
        direccion: 'Tegucigalpa, Honduras avenida IIIIII',
        imagen: 'https://images.pexels.com/photos/2030037/pexels-photo-2030037.jpeg?auto=compress&cs=tinysrgb&w=600',
        imagen2: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imagen3: 'https://images.pexels.com/photos/129494/pexels-photo-129494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imagen4: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imagen5: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        codigo:"F002",
        url: 'Apartamento-amueblado2',
        nombre: 'Apartamento amueblado',
        medidas: '150 M2 - 214.7 V2',
        habitaciones: 3,
        estacionamiento: 1,
        precio: "750.000",
        disponible: true,
        categoria: 'Apartamento',
        descripcion: 'The majestic Penthouse A residence boasts 6,415 sqft with 4 bedrooms, 4 full baths and a powder room plus a 834-sqft glass-wrapped loggia meticulously-designed by AD100 architect, John Pawson. Breath-taking panoramic views from every room with floor-to-ceiling windows and sliding walls of glass open to the loggia creating a sprawling indoor/outdoor living space with sweeping views from Downtown LA to the ocean. Elegantly-designed teak and Basaltina stone Molteni kitchen offers a dramatic island and top-of-the-line Miele appliances.', 
        direccion: 'Tegucigalpa, Honduras avenida IIIIII',
        imagen: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imagen2: 'https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg?auto=compress&cs=tinysrgb&w=600',
        imagen3: 'https://images.pexels.com/photos/129494/pexels-photo-129494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imagen4: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imagen5: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        codigo:"F004",
        url: 'Apartamento-amueblado3',
        nombre: 'Apartamento amueblado',
        medidas: '150 M2 - 214.7 V2',
        habitaciones: 3,
        estacionamiento: 1,
        precio: "700.000",
        disponible: false,
        categoria: 'Apartamento',
        descripcion: 'The majestic Penthouse A residence boasts 6,415 sqft with 4 bedrooms, 4 full baths and a powder room plus a 834-sqft glass-wrapped loggia meticulously-designed by AD100 architect, John Pawson. Breath-taking panoramic views from every room with floor-to-ceiling windows and sliding walls of glass open to the loggia creating a sprawling indoor/outdoor living space with sweeping views from Downtown LA to the ocean. Elegantly-designed teak and Basaltina stone Molteni kitchen offers a dramatic island and top-of-the-line Miele appliances.', 
        direccion: 'Tegucigalpa, Honduras avenida IIIIII',
        imagen: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imagen2: 'https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=600',
        imagen3: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imagen4: 'https://images.pexels.com/photos/129494/pexels-photo-129494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imagen5: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        codigo:"F004",
        url: 'Apartamento-amueblado4',
        nombre: 'Apartamento amueblado',
        medidas: '150 M2 - 214.7 V2',
        habitaciones: 3,
        estacionamiento: 1,
        precio: "700.000",
        disponible: false,
        categoria: 'Apartamento',
        descripcion: 'The majestic Penthouse A residence boasts 6,415 sqft with 4 bedrooms, 4 full baths and a powder room plus a 834-sqft glass-wrapped loggia meticulously-designed by AD100 architect, John Pawson. Breath-taking panoramic views from every room with floor-to-ceiling windows and sliding walls of glass open to the loggia creating a sprawling indoor/outdoor living space with sweeping views from Downtown LA to the ocean. Elegantly-designed teak and Basaltina stone Molteni kitchen offers a dramatic island and top-of-the-line Miele appliances.', 
        direccion: 'Tegucigalpa, Honduras avenida IIIIII',
        imagen: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imagen2: 'https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=600',
        imagen3: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imagen4: 'https://images.pexels.com/photos/129494/pexels-photo-129494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imagen5: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
]


export default inmuebles