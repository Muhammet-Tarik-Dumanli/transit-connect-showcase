import "./Video.css";
import { motion } from "framer-motion";
import video1 from "../../assets/videos/1.mp4";
import video2 from "../../assets/videos/2.mp4";
import videoCover1 from "../../assets/images/24.jpg";
import videoCover2 from "../../assets/images/25.jpg";

const Video = () => {
  return (
    <section className="video-section" id="video">

      <h2>Fark Yaratır</h2>

      <div className="video-grid">

        <motion.div
          className="video-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <video controls
            preload="metadata"
            poster={videoCover1}>
            <source src={video1} type="video/mp4" />
          </video>
          <p>Göz Alıcı</p>
        </motion.div>

        <motion.div
          className="video-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <video controls
            preload="metadata"
            poster={videoCover2}>
            <source src={video2} type="video/mp4" />
          </video>
          <p>Sürükleyici</p>
        </motion.div>

      </div>

    </section>
  );
};

export default Video;