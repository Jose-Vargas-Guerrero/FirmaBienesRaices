import { useState } from 'react'
import '../reactComponents/formulario2.css'

function Formulario2({inmueble, codigo}) {
    const [nombre, setNombre] = useState('')
    const [presupuesto, setPresupuesto] = useState()
    const [prima, setPrima] = useState('')
    const [mensaje, setMensaje] = useState('')

    const handleInput = (setter) => (e) => {
        setter(e.target.value)
    }

    const handlePrima = (value) => {
        setPrima(value)
    }

    const options = ['Cuento con una prima del 10%', 'No cuento con una prima del 10%']

    const message = `hola soy ${nombre}, tengo un presupuesto de ${presupuesto} para ${inmueble} ${codigo}  y mi mensaje es: ${mensaje}. ${prima}`

/*     const encodedMessage = encodeURI(message);
    const whatsappLink = `https://web.whatsapp.com/send?phone=98272321&text=${encodedMessage}`; */
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `whatsapp://send?phone=98272321&text=${encodedMessage}`;

  return (
    <div className="container">
    <div className="form-container">
      <h2>Contacto</h2>
      <form className="form">
        <label>Nombre</label>
        <input onChange={handleInput(setNombre)}  type="text" placeholder="Nombre aqui..." />
        <label>Presupuesto de compra</label>
        <input onChange={handleInput(setPresupuesto)} type="text" placeholder=" HNL / USD" />
        <label>Mensaje</label>
        <input onChange={handleInput(setMensaje)} type="text" placeholder="Comienze a escribir..." />
        <label>Prima del 10%</label>
      </form>
        <div className="options">
            <button onClick={()=>handlePrima(options[0])}>Si</button>
            <button onClick={()=> handlePrima(options[1])}>No</button>
        </div>
      <a href={whatsappLink} target='_blank'>Enviar mensaje</a>
    </div>
  </div>

  )
}

export default Formulario2