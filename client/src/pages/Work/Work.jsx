import { useRef } from "react";
import s from "./Work.module.css";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Approach from "../../components/Approach/Approach";
import LazyImg from "../../components/LazyImg/LazyImg";

const cards = [
  {
    id: 1,
    src: "/hackerface.png",
    ttl: "Frontend Engineer Intern",
    subttl:
      "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
  },
  {
    id: 2,
    src: "/laptop.png",
    ttl: "Mobile App Dev - JSM Tech",
    subttl:
      "Designed and developed mobile app for both iOS & Android platforms using React Native.",
  },
  {
    id: 3,
    src: "/bulb.png",
    ttl: "Freelance Frontend Project",
    subttl:
      "Led the dev of a website for a client, from initial concept to deployment on the web.",
  },
  {
    id: 4,
    src: "/hacker.png",
    ttl: "Lead Frontend Developer",
    subttl:
      "Developed and maintained user-facing features using modern frontend technologies.",
  },
];

const Work = () => {
  return (
    <>
      <section className={s.work}>
        <div className={s.container}>
          <h2 className={s.ttl}>
            My <b className={s.bold}>work experience</b>
          </h2>

          <div className={s.block}>
            {cards.map((card) => (
              <motion.div
                className={s.card}
                key={card.id}
                whileHover={{
                  scale: 1.07,
                  rotateX: 6,
                  rotateY: 6,
                  boxShadow: "0px 20px 40px rgba(203, 172, 249, 0.2)", // cyan glow
                }}
                whileTap={{
                  scale: 0.95,
                  rotateX: 0,
                  rotateY: 0,
                  boxShadow: "0px 8px 20px rgba(203, 172, 249, 0.1)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <div className={s.box}>
                  <img className={s.img} src={card.src} alt={card.src} />

                  <div className={s.info}>
                    <h2 className={s.infoTtl}>{card.ttl}</h2>
                    <p className={s.infoSubttl}>{card.subttl}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Approach/>
    </>
  );
};

export default Work;
