import style from './Contact.module.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import menuStyle from './components/menu.module.css';
import { Menu } from './components/menu';
import React, { useState } from 'react';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

export default function Contact (){
    const position = [-25.3690748,-49.3655514];

    const defaultPhoneNumber = '5541996650912';

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });

    const handleChange = (e) =>{
      const {name,value} = e.target;
      setFormData({...formData, [name]: value})
    }

    const handleZap = () =>{
        const {name, email, message} = formData;
    
        const urlZap = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=
        Nome:%20${name}%0D%0A
        Email:%20${email}%0D%0A
        Mensagem:%20${message}%0D%0A`
    
        window.open(urlZap, "_blank")
      }

    return(
        <>
        {console.log("Renderizando Contact:", formData)}
        <Menu option01={<a href="/" className={menuStyle.navLink}>Voltar à página principal</a>}/>
       
        <section className={style.contactSection}>
  <h1 className={style.tt}>Para entrar em contato comigo:</h1>
  <br/>
  <input placeholder="Insira seu nome" type="text" id='name' name='name' value={formData.name} onChange={handleChange} required className={style.input} />
  <input placeholder="Insira seu email" type="text" id='email' name='email' value={formData.email} onChange={handleChange} required className={style.input} />
  <textarea placeholder="Insira mensagem" type="text" id='message' name='message' value={formData.message} onChange={handleChange} required className={style.textarea} />
  <button onClick={handleZap} className={style.button}>Enviar Mensagem</button>
</section>

        <section className={style.mapSection}>
        <h2>Onde me encontrar:</h2>
        <MapContainer
          center={position}
          zoom={12}
          scrollWheelZoom={true}
          style={{ width: '100vw', height: '1000px'}}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>Você está aqui (aproximadamente)!</Popup>
          </Marker>
        </MapContainer>
      </section>
        </>
    )
}