import "./Story.css";
import { motion } from "framer-motion";

const Story = () => {
  return (
    <section className="story" id="story">

      <div className="story-container">

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Bir Yol Arkadaşı
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Bu araç 2011 yılından beri ailemizin bir parçası oldu.
          Yıllar boyunca düzenli olarak bakımları yapıldı ve her zaman
          özenle kullanıldı.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Şehir içi ve uzun yol kullanımında bizi hiçbir zaman yarı yolda bırakmadı.
          Şimdi ise yeni sahibine güvenle devredilmeye hazır.
        </motion.p>

        <motion.div
          className="story-highlight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span>“Bakımlı, güvenilir ve uzun yıllar sorunsuz kullanılmıştır.”</span>
        </motion.div>

      </div>

    </section>
  );
};

export default Story;