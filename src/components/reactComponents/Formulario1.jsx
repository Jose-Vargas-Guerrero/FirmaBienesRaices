import { useState } from "react";
import "../reactComponents/formulario1.css";
import { MdOutlinePhone } from "react-icons/md";
import { BiMessageSquareDots } from "react-icons/bi";
import { SiGooglemaps } from "react-icons/si";
import "../reactComponents/formulario1.css";

function Formulario1() {
  const [Nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");
  const message = `hola soy ${Nombre}, ${mensaje}`
  const encodedMessage = encodeURI(message)
  const whatsappLink = `https://web.whatsapp.com/send?phone=98272321&text=${encodedMessage}`;

    const handleNombreInput = (e) => {
        setNombre(e.target.value)
    }

    const handleMensajeInput = (e) => {
        setMensaje(e.target.value)
    }

  return (
    <>
      <div className="container" id="formulario1">
        <div className="form-container">
          <h2>Contacto</h2>
          <form className="form">
            <label>Nombre</label>
            <input onChange={handleNombreInput} type="text" placeholder="Nombre aqui..." />
            <label>Mensaje</label>
            <input onChange={handleMensajeInput} type="text" placeholder="Comienze a escribir..." />
          </form>
          <a
            href={whatsappLink}
            target="_blank"
          >
            Enviar mensaje
          </a>
        </div>
        <div className="info-container">
          <div className="contact-info">
            <MdOutlinePhone className="icon" />
            <div className="info-box">
              <strong>Teléfono</strong>
              <p>+504 32340392</p>
              <a
                href="https://wa.me/98272321?text=Hola%20estoy interesado%20en%20hacer%20una%20consulta"
                target="_blank"
              >
                +504 98273221
              </a>
            </div>
          </div>
          <div className="contact-info">
            <BiMessageSquareDots className="icon" />
            <div className="info-box">
              <strong>E-mail</strong>
              <br />
              <a href="mailto:bienesraicesfirma@gmail.com" target="_blank">
                bienesraicesfirma@gmail.com
              </a>
            </div>
          </div>
          <div className="contact-info">
            <SiGooglemaps className="icon" />
            <div className="info-box">
              <strong>Dirección</strong>
              <p>Pendiente dirección fiscal en trámite </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Formulario1;
