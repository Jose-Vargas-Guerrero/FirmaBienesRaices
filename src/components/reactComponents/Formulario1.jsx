import { useState } from "react";
import "../reactComponents/formulario1.css";
import { MdOutlinePhone } from "react-icons/md";
import { BiMessageSquareDots } from "react-icons/bi";
import { SiGooglemaps } from "react-icons/si";
import "../reactComponents/formulario1.css";

function Formulario1() {
  const [Nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [correo, setCorreo] = useState("")
  const [presupuesto, setPresupuesto] = useState("")
  const message = `hola soy ${Nombre} ${correo} y mi presupuesto es: ${presupuesto}, ${mensaje}`;
  const encodedMessage = encodeURI(message);
  const whatsappLink = `https://web.whatsapp.com/send?phone=98272321&text=${encodedMessage}`;

  const handleNombreInput = (e) => {
    setNombre(e.target.value);
  };

  const handleCorreoInput = (e) => {
    setCorreo(e.target.value);
  };

  const handlePresupuestoInput = (e) => {
    setPresupuesto(e.target.value);
  };

  const handleMensajeInput = (e) => {
    setMensaje(e.target.value);
  };

  return (
    <>
      <div className="container" id="formulario1">
        <div className="form-container">
          <h2>Contacto</h2>
          <form className="form">
            <label>Nombre</label>
            <input
              onChange={handleNombreInput}
              type="text"
              placeholder="Nombre aqui..."
            />
            <label>Correo</label>
            <input
              onChange={handleCorreoInput}
              type="text"
              placeholder="Correo aqui..."
            />
            <label>Presupuesto de venta</label>
            <input
              onChange={handlePresupuestoInput}
              type="email"
              placeholder="Presupuesto aqui..."
            />
            <label>Mensaje</label>
            <input
              onChange={handleMensajeInput}
              type="text"
              placeholder="Comienze a escribir..."
            />
          </form>
          <a href={whatsappLink} target="_blank">
            Enviar mensaje
          </a>
        </div>
        <div className="info-container">
          <div className="contact-info">
            <MdOutlinePhone className="icon" />
            <div className="info-box">
              <strong>Teléfono</strong>
              <br />
              <div className="space"></div>
              <a
                href="https://wa.me/98272321?text=Hola%20estoy interesado%20en%20hacer%20una%20consulta"
                target="_blank"
                className="tel"
              >
                +504 98272321
              </a>
            </div>
          </div>
          <div className="contact-info">
            <BiMessageSquareDots className="icon" />
            <div className="info-box">
              <strong>E-mail</strong>
              <br />
              <div className="space"></div>
              <a href="mailto:bienesraicesfirma@gmail.com" target="_blank">
                bienesraicesfirma@gmail.com
              </a>
            </div>
          </div>
          <div className="contact-info">
            <SiGooglemaps className="icon" />
            <div className="info-box">
              <strong>Dirección</strong>
              <p>Torre Agalta, piso 9</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Formulario1;
