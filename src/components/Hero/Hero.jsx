import "./Hero.css";
import { FiChevronDown } from "react-icons/fi";
import heroImage from "../../assets/images/hero.jpg";

const Hero = () => {
    return (
        <section className="hero" id="hero">
            <img src={heroImage} alt="Ford Transit Connect" className="hero-image" />
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <span className="hero-badge">
                    2003 Model
                </span>
                <h1>Ford Transit Connect</h1>
                
                <p>184.100 km • Hususi Ruhsat • 6 Koltuk</p>
                <div className="hero-buttons">
                    <a href="#gallery">Fotoğraflar</a>
                    <a href="#contact">İletişim</a>
                </div>
                <div className="trust-badges">

                    <div className="badge">
                        ✓ 2011'den beri aynı aile kullanımında
                    </div>

                    <div className="badge">
                        ✓ Düzenli bakımlı
                    </div>

                    <div className="badge">
                        ✓ Yedek anahtar mevcut
                    </div>

                </div>
            </div>


        </section>
    )
};

export default Hero;