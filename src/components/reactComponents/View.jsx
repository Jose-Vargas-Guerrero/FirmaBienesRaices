import './View.css'
import { useState, useEffect } from 'react'

function View({nombre,medidas,habitacion,estacionamiento,precio,
    categoria,descripcion,direccion,image1,image2,image3,image4,image5
}) {
    const [image, setImage] = useState(image1)
    const [animate, setAnimate] = useState(true)

    const handleAnimate = () => {
        setAnimate(false)
    }


    const handleImage = (current) => {
        setImage(current)
        handleAnimate(false)
    }

    /* cambia el estado de la animacion */
    useEffect(() => {
        setAnimate(true)
    }, [animate])

  return (
    <div className='view-container'>
        <div className='image-container'>
        <img src={image} alt="lala" className={`image ${animate ? 'fade-in' : ''}`} />
        </div>
        <div className='buttons-container'>
            <button onClick={() => handleImage(image1)}>
                <img src={image1} className='option'/>
            </button>
            <button onClick={() => handleImage(image2)}>
            <img src={image2} className='option'/>
            </button>
            <button onClick={() => handleImage(image3)}>
            <img src={image3} className='option'/>
            </button>
            <button onClick={() => handleImage(image4)}>
            <img src={image4} className='option'/>
            </button>
            <button onClick={() => handleImage(image5)}>
            <img src={image5} className='option'/>
            </button>
        </div>
        <div className='info-container'>
            <strong>{precio} HNL</strong>
            <h2>{nombre}</h2>
            <p>{categoria}</p>
            <p>{habitacion} habitaciones {estacionamiento} estacionamiento {medidas}</p>
            <a href='#'>Contactar</a>
        </div>
        <div className='descripcion'>
            <h3>Descripcion</h3>
            <p>{descripcion}</p>
        </div>
        <div className='descripcion'>
            <h3>Locacion</h3>
            <p>{direccion}</p>
        </div>
    </div>
  )
}

export default View