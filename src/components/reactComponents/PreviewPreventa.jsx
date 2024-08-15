import "../reactComponents/previews.css";
import { useState } from "react";
import categorias from "../../data/categorias";

function PreviewPreventa({inmuebles}) {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(
    categorias.all
  );


  const handleFilter = (p) => {
    setCategoriaSeleccionada(p)
  }

  const inmueblesFilter =
    categoriaSeleccionada === categorias.all ? inmuebles : inmuebles.filter(
          (inmueble) => inmueble.categoria === categoriaSeleccionada
  );
    

  return (
    <>
      <div className="options">
        <button className="btn" onClick={() => handleFilter(categorias.all)}>Todo</button>
        <button className="btn" onClick={() => handleFilter(categorias.Viviendas)}>Viviendas</button>
{/*         <button className="btn" onClick={() => handleFilter(categorias.Apartamentos)}>Apartamentos</button>
        <button className="btn" onClick={() => handleFilter(categorias.Terrenos)}>Terrenos</button> */}
{/*         <button className="btn" onClick={() => handleFilter(categorias.Edificios)}>Edificios</button> */}
{/*         <button className="btn" onClick={() => handleFilter(categorias.Locales)}>Locales comerciales</button> */}
      </div>
      <main className="main">
        {inmueblesFilter.map((inmueble) => (
          <a key={inmueble.url} href={`/preventa/${inmueble.url}`} className="preview">
          <div className="codigo">
            <p>{inmueble.codigo}</p>
          </div>
          <img src={inmueble.imagen} alt="preview" />
          <div className="info">
            <h2>{inmueble.nombre}</h2>
            <p>{inmueble.medidas}</p>
            <p>{inmueble.caracteristica1} {inmueble.caracteristica2}</p>
            <strong>{inmueble.precio}</strong>
          </div>
          <div className="disponible">
            {inmueble.disponible ? null : <p>No disponible</p>}
          </div>
        </a>
        ))}
      </main>
    </>
  );
}

export default PreviewPreventa;
