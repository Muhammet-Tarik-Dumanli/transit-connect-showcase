import "./Contact.css";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const phoneNumber = "0533 654 47 53";

  return (
    <section className="contact" id="contact">

      <div className="contact-container">

        <h2>İletişim</h2>

        <div className="price-box">
          <span>Fiyat</span>
          <h1>319.900 TL</h1>
          <p>Pazarlık araç başında yapılır</p>
        </div>

        <div className="contact-buttons">

          <a href={`tel:${phoneNumber}`} className="btn phone">
            <FaPhone />
            Ara
          </a>

          <a
            href={`https://wa.me/905336544753?text=Araç%20hâlâ%20satılık%20mı?`}
            className="floating-whatsapp"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp /> WhatsApp
          </a>

        </div>

        <div className="note">
          <p>
            Araç ekspertize açıktır. Dileyen ustaya gösterebilir.
          </p>
        </div>

      </div>

    </section>
  );
};

export default Contact;