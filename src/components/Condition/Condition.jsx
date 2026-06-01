import "./Condition.css";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const Condition = () => {
  const items = [
    "Bilinen kaza yok",
    "Değişen parça yok",
    "Motor durumu iyi",
    "Ekspertize açık",
    "Düzenli bakımlı",
    "Akü yeni değişti"
  ];

  return (
    <section className="condition" id="condition">

      <h2>Durum Raporu</h2>

      <div className="condition-grid">

        {items.map((item, i) => (
          <motion.div
            key={i}
            className="condition-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FaCheckCircle className="icon" />
            <span>{item}</span>
          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Condition;