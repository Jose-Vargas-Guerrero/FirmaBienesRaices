const inmuebles = [
    {
        codigo:"F001",
        url: 'Casa-nueva,-modelo-B',
        nombre: 'Casa nueva, modelo B',
        medidas: '272.18 V2',
        caracteristica1: '6 habitaciones',
        caracteristica2: '1 estacionamiento',
        precio: "357,000 USD",
        disponible: true,
        categoria: 'Viviendas',
        descripcion: 'Cuenta con 6 habitaciones con closet y baño privado, amplia sala, comedor, cocina con isla, lavandería interna, pila externa, cisterna de 16 galones, estacionamiento para 3 vehículos, 2 salas familiares, doble altura con iluminación natural, aire acondicionado, sistema de agua caliente y detalles de luz escondida en ambas plantas.', 
        direccion: 'Residencial Las Cascadas, Tegucigalpa',
        imagen: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/residencial%20las%20cascadas/residencial%20las%20cascadas%20(10).jpeg?raw=true',
        imagen2: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/residencial%20las%20cascadas/residencial%20las%20cascadas%20(9).jpeg?raw=true',
        imagen3: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/residencial%20las%20cascadas/residencial%20las%20cascadas%20(1).jpeg?raw=true',
        imagen4: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/residencial%20las%20cascadas/residencial%20las%20cascadas%20(2).jpeg?raw=true',
        imagen5: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/residencial%20las%20cascadas/residencial%20las%20cascadas%20(3).jpeg?raw=true',
        imagen6: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/residencial%20las%20cascadas/residencial%20las%20cascadas%20(4).jpeg?raw=true',
        imagen7: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/residencial%20las%20cascadas/residencial%20las%20cascadas%20(5).jpeg?raw=true',
        imagen8: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/residencial%20las%20cascadas/residencial%20las%20cascadas%20(6).jpeg?raw=true',
        imagen9: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/residencial%20las%20cascadas/residencial%20las%20cascadas%20(7).jpeg?raw=true',
        imagen10: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/residencial%20las%20cascadas/residencial%20las%20cascadas%20(8).jpeg?raw=true',
    },
    {
        codigo:"F002",
        url: 'Terreno-en-el-Hatillo-sector-Piligüin',
        nombre: 'Terreno en el Hatillo, sector Piligüin',
        medidas: '1,301.59 V2',
        caracteristica1: 'Servicios públicos',
        caracteristica2: '1 estacionamiento',
        precio: "1.850.000,00 HNL",
        disponible: true,
        categoria: 'Terrenos',
        descripcion: 'Propiedad en venta con circuito cerrado, servicios públicos y rodeada de bosque y neblina. Cuenta con cisterna de 16,000 galones, fosa séptica de 14,800 galones, fácil acceso por calle, maya perimetral con bambú, y árboles maderables y frutales dentro del terreno.', 
        direccion: 'Res. La Nubes, El Tablón, El Hatillo',
        imagen: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/terreno%20el%20pilinguin/terrenopilinguin%20(1).jpg?raw=true',
        imagen2: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/terreno%20el%20pilinguin/terrenopilinguin%20(10).jpg?raw=true',
        imagen3: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/terreno%20el%20pilinguin/terrenopilinguin%20(11).jpg?raw=true',
        imagen4: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/terreno%20el%20pilinguin/terrenopilinguin%20(2).jpg?raw=true',
        imagen5: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/terreno%20el%20pilinguin/terrenopilinguin%20(3).jpg?raw=true',
        imagen6: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/terreno%20el%20pilinguin/terrenopilinguin%20(4).jpg?raw=true',
        imagen7: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/terreno%20el%20pilinguin/terrenopilinguin%20(5).jpg?raw=true',
        imagen8: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/terreno%20el%20pilinguin/terrenopilinguin%20(6).jpg?raw=true',
        imagen9: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/terreno%20el%20pilinguin/terrenopilinguin%20(7).jpg?raw=true',
        imagen10: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/terreno%20el%20pilinguin/terrenopilinguin%20(9).jpg?raw=true',
    },
    {
        codigo:"F003",
        url: 'Residencial-Villa-Elena',
        nombre: 'Residencial Villa Elena',
        medidas: '3,000 VR2',
        caracteristica1: '6 habitaciones',
        caracteristica2: '1 estacionamiento',
        precio: "280.000 USD",
        disponible: true,
        categoria: 'Viviendas',
        descripcion: 'Propiedad exclusiva a 20 minutos de Tegucigalpa, con 3,000 v² de terreno y 487.52 m² de construcción. Primer nivel: terraza, sala con chimenea, comedor abierto, cocina con isla, medio baño, bodega, terraza posterior, y cuarto principal con walk-in closet, baño privado y jacuzzi. Segundo nivel: cuarto de servicio con baño, cisterna de 1500 galones, cuarto de lavandería, pasillo con balcón, sala familiar, 2 habitaciones con baño compartido y 2 con baño privado. Incluye área social con parrilla y bosque.', 
        direccion: 'Villa Elena, Tegucigalpa, Francisco Morazán',
        imagen: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/villa%20elena/casavillaelena%20(10).jpeg?raw=true',
        imagen2: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/villa%20elena/casavillaelena%20(1).jpeg?raw=true',
        imagen3: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/villa%20elena/casavillaelena%20(2).jpeg?raw=true',
        imagen4: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/villa%20elena/casavillaelena%20(3).jpeg?raw=true',
        imagen5: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/villa%20elena/casavillaelena%20(4).jpeg?raw=true',
        imagen6: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/villa%20elena/casavillaelena%20(5).jpeg?raw=true',
        imagen7: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/villa%20elena/casavillaelena%20(6).jpeg?raw=true=true',
        imagen8: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/villa%20elena/casavillaelena%20(7).jpeg?raw=true',
        imagen9: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/villa%20elena/casavillaelena%20(8).jpeg?raw=true',
        imagen10: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/villa%20elena/casavillaelena%20(9).jpeg?raw=true',
    },
    {
        codigo:"F004",
        url: 'Terreno-Villa-Elena',
        nombre: 'Terreno en Residencial Villa Elena',
        medidas: '4798.451 V2',
        caracteristica1: 'Servicios públicos',
        caracteristica2: 'Calle pavimentada',
        precio: "40 USD por V2",
        disponible: true,
        categoria: "Terrenos",
        descripcion: 'Terreno de 4798.451 v²,urbanizado, con servicios públicos, calle pavimentada y fácil acceso.', 
        direccion: 'Villa Elena, Tegucigalpa, Francisco Morazán',
        imagen: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/vilaelena/villaElena.jpg?raw=true',
        imagen2: '',
        imagen3: '',
        imagen4: '',
        imagen5: '',
        imagen6: '',
        imagen7: '',
        imagen8: '',
        imagen9: '',
        imagen10: '',
    },
    {
        codigo:"F005",
        url: 'Residencial-villa-entre-pinos-lote-y-construccion',
        nombre: 'Residencial villa entre pinos',
        medidas: '500 V2',
        caracteristica1: '',
        caracteristica2: '',
        precio: "950 HNL por V2",
        disponible: true,
        categoria: "Terrenos",
        descripcion: 'Lotes disponibles desde 500 v², Precio por v² desde L950, con posibilidad de reservar con solo L25,000 y opción de construcción.', 
        direccion: 'Tatumbla,Francisco Morazán',
        imagen: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/tatumbla/tatumbla.jpg?raw=true',
        imagen2: '',
        imagen3: '',
        imagen4: '',
        imagen5: '',
        imagen6: '',
        imagen7: '',
        imagen8: '',
        imagen9: '',
        imagen10: '',
    },
    {
        codigo:"F006",
        url: 'terreno-el-Hatillo',
        nombre: 'Terreno en el Hatillo',
        medidas: '5,500 V2',
        caracteristica1: '$85 V2 Terreno total',
        caracteristica2: '$95 V2 la mitad del terreno ',
        precio: "85-95 USD por V2",
        disponible: true,
        categoria: "Terrenos",
        descripcion: 'Terreno de esquina disponible a $85 v² por el terreno completo o $95 v² por la mitad. Cuenta con seguridad, circuito cerrado, topografía plana, calle pavimentada, electricidad y agua.', 
        direccion: 'El Hatillo,El Hatillo, Tegucigalpa, Francisco Morazán',
        imagen: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/terreno%20el%20atillo/terrenoHatillo%20(1).jpg?raw=true',
        imagen2: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/terreno%20el%20atillo/terrenoHatillo%20(10).jpg?raw=true',
        imagen3: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/terreno%20el%20atillo/terrenoHatillo%20(2).jpg?raw=true',
        imagen4: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/terreno%20el%20atillo/terrenoHatillo%20(3).jpg?raw=true',
        imagen5: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/terreno%20el%20atillo/terrenoHatillo%20(4).jpg?raw=true',
        imagen6: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/terreno%20el%20atillo/terrenoHatillo%20(5).jpg?raw=true',
        imagen7: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/terreno%20el%20atillo/terrenoHatillo%20(6).jpg?raw=true',
        imagen8: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/terreno%20el%20atillo/terrenoHatillo%20(7).jpg?raw=true',
        imagen9: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/terreno%20el%20atillo/terrenoHatillo%20(8).jpg?raw=true',
        imagen10: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/terreno%20el%20atillo/terrenoHatillo%20(9).jpg?raw=true',
    },
    {
        codigo:"F007",
        url: 'Espacio-para-negocio-en-Artemisa',
        nombre: 'Espacio para negocio en Artemisa ',
        medidas: '28 M2',
        caracteristica1: '1 habitacion',
        caracteristica2: '1 estacionamiento',
        precio: "75,000 USD",
        disponible: true,
        categoria: "Locales",
        descripcion: 'Espacio ideal para negocio en Artemisa, en el edificio Artemisa, piso 10, con 28 m². Precio: $75,000.', 
        direccion: 'Torre artemisa frente a unah, Tegucigalpa, Francisco Morazán',
        imagen: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/local%20artemisa/localArtemisa%20(1).jpg?raw=true',
        imagen2: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/local%20artemisa/localArtemisa%20(10).jpg?raw=true',
        imagen3: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/local%20artemisa/localArtemisa%20(2).jpg?raw=true',
        imagen4: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/local%20artemisa/localArtemisa%20(3).jpg?raw=true',
        imagen5: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/local%20artemisa/localArtemisa%20(4).jpg?raw=true',
        imagen6: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/local%20artemisa/localArtemisa%20(5).jpg?raw=true',
        imagen7: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/local%20artemisa/localArtemisa%20(6).jpg?raw=true',
        imagen8: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/local%20artemisa/localArtemisa%20(7).jpg?raw=true',
        imagen9: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/local%20artemisa/localArtemisa%20(8).jpg?raw=true',
        imagen10: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/local%20artemisa/localArtemisa%20(9).jpg?raw=true',
    },
     {
        codigo:"F008",
        url: 'Terreno-Col-El-periodista',
        nombre: 'Terreno en Col. el Periodista',
        medidas: '800 V2',
        caracteristica1: 'Electricidad ',
        caracteristica2: 'Fosa séptica',
        precio: "2,000,000 HNL",
        disponible: true,
        categoria: "Terrenos",
        descripcion: "800 v², circuito cerrado, electricidad, pegue de agua a 50 metros y fosa séptica.", 
        direccion: 'Colonia El Periodista, San Pedro Sula, Cortés',
        imagen: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/periodista/periodista.jpg?raw=true',
    },
    {
        codigo:"F009",
        url: 'Casa-en-Villas-del-Real',
        nombre: 'Casa en Villas del Real ',
        medidas: '160 M2 ',
        caracteristica1: '6 habitaciones',
        caracteristica2: '1 estacionamiento',
        precio: "4,300,000 HNL",
        disponible: true,
        categoria: "Viviendas",
        descripcion: "Casa en Villas del Real, con construcción de 160 m² en un terreno de 285 v². Cuenta con 3 habitaciones, habitación de empleada, 2 baños completos y baño de visitas, sala, área de comedor, cocina con desayunador, estacionamiento para 3 vehículos y amplia área libre.", 
        direccion: 'Villas del Real, sector de las uvas, Tegucigalpa ',
        imagen: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/casavillareal/viviendaVillaReal%20(2).jpeg?raw=true',
        imagen2: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/casavillareal/viviendaVillaReal%20(1).jpeg?raw=true',
        imagen3: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/casavillareal/viviendaVillaReal%20(10).jpeg?raw=true',
        imagen4: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/casavillareal/viviendaVillaReal%20(3).jpeg?raw=true',
        imagen5: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/casavillareal/viviendaVillaReal%20(4).jpeg?raw=true',
        imagen6: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/casavillareal/viviendaVillaReal%20(5).jpeg?raw=true',
        imagen7: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/casavillareal/viviendaVillaReal%20(6).jpeg?raw=true',
        imagen8: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/casavillareal/viviendaVillaReal%20(7).jpeg?raw=true',
        imagen9: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/casavillareal/viviendaVillaReal%20(8).jpeg?raw=true',
        imagen10: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/casavillareal/viviendaVillaReal%20(9).jpeg?raw=true',
    },
    {
        codigo:"F010",
        url: 'Vivienda-Col-Tepeyac',
        nombre: 'Vivienda Col. Tepeyac',
        medidas: '546.54 M2',
        caracteristica1: '4 habitaciones',
        caracteristica2: '1 estacionamiento',
        precio: "11,000,000 HNL",
        disponible: true,
        categoria: "Viviendas",
        descripcion: "Inversión en Colonia Tepeyac, zona de alta plusvalía y exclusividad. Vivienda de 632.25 v² de terreno y 546.54 m² de construcción por L11,000,000. Primer nivel: estacionamiento techado para 4 vehículos, jardines frontal y posterior, 1 habitación con baño privado, estudio, bodega, sala con piso de mármol, cocina con alacena, comedor, porche techado, lavandería techada, cisterna y tanque elevado. Segundo nivel: habitación principal con baño privado y walk-in closet, 1 habitación secundaria, oficina privada, sala familiar y cuarto de blancas. Ofrece amplio estacionamiento, jardines, excelente ubicación comercial y finos acabados en una zona segura y exclusiva.", 
        direccion: 'Col. Tepeyac, Distrito Central, Francisco Morazán',
        imagen: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/villa%20elena/col%20tepeyac/tepeyac%20(3).jpeg?raw=true',
        imagen2: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/villa%20elena/col%20tepeyac/tepeyac%20(1).jpeg?raw=true',
        imagen3: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/villa%20elena/col%20tepeyac/tepeyac%20(10).jpeg?raw=true',
        imagen4: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/villa%20elena/col%20tepeyac/tepeyac%20(2).jpeg?raw=true',
        imagen5: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/villa%20elena/col%20tepeyac/tepeyac%20(4).jpeg?raw=true',
        imagen6: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/villa%20elena/col%20tepeyac/tepeyac%20(5).jpeg?raw=true',
        imagen7: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/villa%20elena/col%20tepeyac/tepeyac%20(6).jpeg?raw=true',
        imagen8: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/villa%20elena/col%20tepeyac/tepeyac%20(7).jpeg?raw=true',
        imagen9: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/villa%20elena/col%20tepeyac/tepeyac%20(8).jpeg?raw=true',
        imagen10: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/villa%20elena/col%20tepeyac/tepeyac9.jpeg?raw=true',
    },
    {
        codigo:"F011",
        url: 'Terreno-en-residencial-lomas-del-Molino',
        nombre: 'Terreno en Residencial Lomas del Molino',
        medidas: '1,942 VR2',
        caracteristica1: 'Circuito cerrado',
        caracteristica2: '1 estacionamiento',
        precio: "185 USD por VR2",
        disponible: true,
        categoria: "Terrenos",
        descripcion: "Terreno en venta de 1,942 v² en Res. Lomas del Molino a $185 por v². Incluye circuito cerrado, seguridad 24/7 y topografía irregular.", 
        direccion: 'Lomas del Molino, Distrito Central, Francisco Morazan, saluda a Valle de Ángeles',
        imagen: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/terrenoMolino/terrenoMolino%20(1).jpg?raw=true',
        imagen2: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/terrenoMolino/terrenoMolino%20(2).jpg?raw=true',
        imagen3: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/terrenoMolino/terrenoMolino%20(3).jpg?raw=true',
        imagen4: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/terrenoMolino/terrenoMolino%20(4).jpg?raw=true',
        imagen5: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/terrenoMolino/terrenoMolino%20(5).jpg?raw=true',
        imagen6: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/terrenoMolino/terrenoMolino%20(6).jpg?raw=true',
    },
    {
        codigo:"F012",
        url: 'Terreno-en-residencial-Zarahemla',
        nombre: 'Terreno en Residencial Zarahemla',
        medidas: '354 VR2',
        caracteristica1: 'Electricidad',
        caracteristica2: 'Agua',
        precio: "7,500 HNL V2",
        disponible: true,
        categoria: "Terrenos",
        descripcion: "Cerca de la zona fresca de Tegucigalpa y del anillo periférico, calles pavimentadas, electricidad, agua, seguridad 24/7 y acceso a crédito bancario.", 
        direccion: 'Residencial Zarahemla, Tegucigalpa, Francisco Morazán',
        imagen: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/zarahemla/res.zarahemla.jpg?raw=true',
        imagen2: '',
        imagen3: '',
        imagen4: '',
        imagen5: '',
        imagen6: '',
        imagen7: '',
        imagen8: '',
        imagen9: '',
        imagen10: '',
    },
    {
        codigo:"F013",
        url: 'Vivienda-En-Residencial-Villa-Foresta',
        nombre: 'Vivienda En Residencial Villa Foresta',
        medidas: '56.40 M2 ',
        caracteristica1: '3 habitaciones',
        caracteristica2: '1 estacionamiento',
        precio: "1,550,000 HNL",
        disponible: true,
        categoria: 'Viviendas',
        descripcion: 'Casa en Residencial Villa Foresta, en circuito cerrado, disponible por L1,500,000. Terreno de 140.55 v² y construcción de 56.40 m². Incluye 3 habitaciones, un baño completo, cocina, sala, estacionamiento, porch, pasillo lateral, área de lavandería, portón, muro y seguridad 24/7. Ubicada a solo 10 minutos de Loarque.', 
        direccion: 'Residencial Villa Foresta, Tegucigalpa, Francisco Morazán',
        imagen: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/villa%20foresta/villaForesta%20(1).jpeg?raw=true',
        imagen2: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/villa%20foresta/villaForesta%20(10).jpeg?raw=true',
        imagen3: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/villa%20foresta/villaForesta%20(2).jpeg?raw=true',
        imagen4: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/villa%20foresta/villaForesta%20(3).jpeg?raw=true',
        imagen5: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/villa%20foresta/villaForesta%20(4).jpeg?raw=true',
        imagen6: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/villa%20foresta/villaForesta%20(5).jpeg?raw=true',
        imagen7: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/villa%20foresta/villaForesta%20(6).jpeg?raw=true',
        imagen8: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/villa%20foresta/villaForesta%20(7).jpeg?raw=true',
        imagen9: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/villa%20foresta/villaForesta%20(8).jpeg?raw=true',
        imagen10: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/villa%20foresta/villaForesta%20(9).jpeg?raw=true',
    },
     {
        codigo:"F014",
        url: 'Terreno-Amarateca',
        nombre: 'Terreno en Amarateca',
        medidas: '3 manzanas ',
        caracteristica1: 'Electricidad',
        caracteristica2: '1 estacionamiento',
        precio: "6,600,000 HNL",
        disponible: true,
        categoria: 'Terrenos',
        descripcion: 'Propiedad en Amarateca, km 17 de la salida al norte, con 3 manzanas de terreno plano, caminos amplios, y árboles frutales y ornamentales. Incluye dos pozos sépticos (uno de 3x2 m y otro de 3x3 m³), electricidad ENEE desde la calle principal, cisterna de 50 barriles, laguna con tilapia, cosechadora de agua, agua de pozo, internet, y una manzana con tierra fértil y la otra mitad con material selecto de construcción.', 
        direccion: 'Amarateca, Tegucigalpa, Francisco Morazán',
        imagen: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/terrenoAmarateca/amarateca1.jpg?raw=true',
        imagen2: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/terrenoAmarateca/amarateca2.jpg?raw=true',
        imagen3: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/terrenoAmarateca/amarateca3.jpg?raw=true',
        imagen4: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/terrenoAmarateca/amarateca4.jpg?raw=true',
    }, 
    /* {
        codigo:"F015",
        url: 'Edificio-Blvd-Morazan',
        nombre: 'Edificio en boulevard Morazan',
        medidas: '',
        caracteristica1: '5 apartamentos',
        caracteristica2: '1  penthouse',
        precio: "11,600,000 HNL",
        disponible: true,
        categoria: 'Propiedad',
        descripcion: 'Edificio en Blvd Morazán,  con 4 locales comerciales, 5 apartamentos, 1 penthouse, terraza y area de lavanderia.', 
        direccion: 'Las Minitas, Tegucigalpa, Francisco Morazán',
        imagen: '',
        imagen2: '',
        imagen3: '',
        imagen4: '',
        imagen5: '',
        imagen6: '',
        imagen7: '',
        imagen8: '',
        imagen9: '',
        imagen10: '',
    }, */
   /*  {
        codigo:"F016",
        url: 'Edificio-3-caminos',
        nombre: 'Edificio ubicado en 3 caminos',
        medidas: '',
        caracteristica1: 'Apartamentos',
        caracteristica2: 'Locales comerciales',
        precio: "1,000,000 USD",
        disponible: true,
        categoria: 'Propiedad',
        descripcion: 'Edificio ubicado en 3 Caminos, 5 locales comerciales, 5 oficinas, 18 apartamentos, 18 estacionamientos.', 
        direccion: 'Colonia Tres Caminos, San Pedro Sula, Cortés',
        imagen: '',
        imagen2: '',
        imagen3: '',
        imagen4: '',
        imagen5: '',
        imagen6: '',
        imagen7: '',
        imagen8: '',
        imagen9: '',
        imagen10: '',
    }, */
    {
        codigo:"F017",
        url: 'Penthouse-en-Torre-Platinum',
        nombre: 'Penthouse en Torre Platinum',
        medidas: '',
        caracteristica1: '4 habitaciones',
        caracteristica2: '4 estacionamiento',
        precio: "900,000 USD",
        disponible: true,
        categoria: 'Viviendas',
        descripcion: '4 habitaciones, 4 baños, salas, comedor, cocina, alacena', 
        direccion: 'Torre Platinum, Colonia Tepeyac, Tegucigalpa, Francisco Morazán',
        imagen: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/platinum/platinum.jpg?raw=true',
        imagen2: '',
        imagen3: '',
        imagen4: '',
        imagen5: '',
        imagen6: '',
        imagen7: '',
        imagen8: '',
        imagen9: '',
        imagen10: '',
    },
    { 
       
        codigo:"F018",
        url: 'Penthouse-en-Torre-Tiffanys',
        nombre: 'Penthouse en Torre Tiffanys',
        medidas: '',
        caracteristica1: '',
        caracteristica2: '',
        precio: "392,000 USD",
        disponible: true,
        categoria: 'Apartamentos',
        descripcion: 'Penthouse en Torre Tiffanys, una opción de lujo en un edificio moderno y elegante, ideal para quienes buscan un estilo de vida exclusivo y cómodo.', 
        direccion: 'Torre Tiffanys, Lomas del Guijarro, Tegucigalpa, Francisco Morazán',
        imagen: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/penthouseTifanny/apartamentoTifanny%20(2).jpg?raw=true',
        imagen2: '',
        imagen3: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/penthouseTifanny/apartamentoTifanny%20(3).jpg?raw=true',
        imagen4: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/penthouseTifanny/apartamentoTifanny%20(4).jpg?raw=true',
        imagen5: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/penthouseTifanny/apartamentoTifanny%20(5).jpg?raw=true',
        imagen6: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/penthouseTifanny/apartamentoTifanny%20(6).jpg?raw=true',
        imagen7: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/penthouseTifanny/apartamentoTifanny%20(7).jpg?raw=true',
        imagen8: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/penthouseTifanny/apartamentoTifanny%20(8).jpg?raw=true',
        imagen9: 'https://github.com/Jose-Vargas-Guerrero/firmaImagenes/blob/main/images/penthouseTifanny/apartamentoTifanny%20(9).jpg?raw=true',
        imagen10: '',
    }
]


export default inmuebles