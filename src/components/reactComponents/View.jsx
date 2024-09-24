import "./View.css";
import { useState, useEffect } from "react";

function View({  nombre,  medidas,  caracteristica1,  caracteristica2,  precio,  categoria,  descripcion,  direccion,
  image1,  image2,  image3,  image4,  image5,  image6,  image7,  image8,  image9,image10,}) 
  {
  const [image, setImage] = useState(image1);
  const [animate, setAnimate] = useState(true);
  const message = `Hola tengo una consulta sobre: ${nombre}`
  const encodedMessage = encodeURIComponent(message)
  const whatsappLink = `whatsapp://send?phone=98272321&text=${encodedMessage}`;
  const images = [
    image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,
  ];

  const handleAnimate = () => {
    setAnimate(false);
  };

  const handleImage = (current) => {
    setImage(current);
    handleAnimate(false);
  };

  /* cambia el estado de la animacion */
  useEffect(() => {
    setAnimate(true);
  }, [animate]);

  return (
    <div className="view-container">
      <div className="image-container">
        <img
          src={image}
          alt={nombre}
          className={`image ${animate ? "fade-in" : ""}`}
        />
      </div>
      <div className="buttons-container">
        {images.map((image) =>
          image ? (
            <button onClick={() => handleImage(image)}>
              <img
                src={image}
                className="option"
                alt="propiedad firma bienes raices"
              />
            </button>
          ) : null
        )}
      </div>
      <div className="info-container">
        <strong>{precio}</strong>
        <h2>{nombre}</h2>
        <p>{categoria}</p>
        <p>
          {caracteristica1} {caracteristica2} {medidas}
        </p>
        <a
          href={whatsappLink}
          target="_blank"
        >
          Contactar
        </a>
      </div>
      <div className="descripcion">
        <h3>Descripción</h3>
        <p>{descripcion}</p>
      </div>
      <div className="descripcion">
        <h3>Locación</h3>
        <p>{direccion}</p>
      </div>
    </div>
  );
}

export default View;
