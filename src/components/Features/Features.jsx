import "./Features.css";
import { motion } from "framer-motion";
import { FaRoad, FaCarBattery, FaKey, FaBook, FaDoorOpen, FaUsers } from "react-icons/fa";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const Features = () => {
  return (
    <motion.section
      className="features"
      id="features"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >

      <div className="features-container">

        <h2>Öne Çıkan Özellikler</h2>

        <div className="features-grid">

          <motion.div className="feature-card" variants={item}>
            <FaRoad className="icon" />
            <h3>184.100 KM</h3>
            <p>Aktif kullanım</p>
          </motion.div>

          <motion.div className="feature-card" variants={item}>
            <FaCarBattery className="icon" />
            <h3>Yeni Akü</h3>
            <p>Sıfır takıldı</p>
          </motion.div>

          <motion.div className="feature-card" variants={item}>
            <FaKey className="icon" />
            <h3>Yedek Anahtar</h3>
            <p>Mevcut</p>
          </motion.div>

          <motion.div className="feature-card" variants={item}>
            <FaBook className="icon" />
            <h3>Kitapçık</h3>
            <p>Orijinal</p>
          </motion.div>

          <motion.div className="feature-card" variants={item}>
            <FaDoorOpen className="icon" />
            <h3>180° Kapılar</h3>
            <p>Geniş açılım</p>
          </motion.div>

          <motion.div className="feature-card" variants={item}>
            <FaUsers className="icon" />
            <h3>6 Kişilik</h3>
            <p>Hususi ruhsat</p>
          </motion.div>

        </div>

      </div>

    </motion.section>
  );
};

export default Features;