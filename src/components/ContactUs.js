import { useRef, useState } from "react";

function ContactUs() {
    const formRef = useRef(null);
    const [mensaje, setMensaje] = useState('');
  
    const handleSubmit = (e) => {
        e.preventDefault();
      
        const nombre = formRef.current.name.value;
        const email = formRef.current.email.value;
        const mensaje = formRef.current.message.value;
      
        // Generar el mensaje con todos los campos del formulario
        const mensajeFinal = `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`;
      
        // Generar el enlace de WhatsApp con el número de teléfono y el mensaje
        const link = `https://api.whatsapp.com/send?phone=573022853330&text=${encodeURIComponent(mensajeFinal)}`;
      
        // Redirigir al enlace de WhatsApp
        window.location.href = link;
      };
      
  
    return (
      <section id="contact" className="tm-section-pad-top tm-parallax-2">
        <div className="container tm-container-contact">
          <div className="row">
            <div className="text-center col-12">
              <h2 className="tm-section-title mb-4">Contacto</h2>
              <p className="mb-5">Dejanos tu información y estaremos en contacto</p>
              <br />
            </div>
            <div className="col-sm-12 col-md-6">
              <form ref={formRef} onSubmit={handleSubmit}>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="tm-input"
                  required
                />
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="tm-input"
                  required
                />
                <textarea
                  id="message"
                  name="message"
                  rows="8"
                  placeholder="Message"
                  className="tm-input"
                  required
                ></textarea>
                <button type="submit" className="btn tm-btn-submit">
                  Submit
                </button>
              </form>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="contact-item">
                <a rel="nofollow" href="mailto:mail@company.com" className="item-link">
                  <i className="far fa-2x fa-envelope mr-4"></i>
                  <span className="mb-0">mail@company.com</span>
                </a>
              </div>
              <div className="contact-item">
                <a rel="nofollow" href="#location" className="item-link">
                  <i className="fas fa-2x fa-map-marker-alt mr-4"></i>
                  <span className="mb-0">Our Location</span>
                </a>
              </div>
              <div className="contact-item">
                <a rel="nofollow" href="tel:0100200340" className="item-link">
                  <i className="bi bi-whatsapp"></i>
                  <span className="mb-0">255-662-5566</span>
                </a>
              </div>
              <div className="contact-item">&nbsp;</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  

  

export default ContactUs;