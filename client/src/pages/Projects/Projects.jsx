import { Link } from "react-router-dom";
import s from "./Projects.module.css";
import { motion } from "framer-motion";
import LazyImg from "../../components/LazyImg/LazyImg";

const cards = [
  {
    id: 1,
    ttl: "HouseVOP - Housing Landing Page",
    subttl:
      "Discover your dream home with HouseVOP through an immersive 3D experience of modern real estate listings.",
    card: "/housevop.png",
    img1: "/react.png",
    img2: "/tailwind.png",
    img3: "/ts.png",
    img4: "/threejs.png",
    img5: "/m.png",
    url: "https://firered222.github.io/HouseVOP/",
  },
  {
    id: 2,
    ttl: "AeroVision - Personal Portfolio",
    subttl:
      "Showcase your creative vision with AeroVision. Seamlessly present your work and exciting story.",
    card: "/aerovision.png",
    img1: "/next.png",
    img2: "/tailwind.png",
    img3: "/ts.png",
    img4: "/stream.png",
    img5: "/c.png",
    url: "*",
  },
  {
    id: 3,
    ttl: "Polar Ice Cream - Website",
    subttl:
      "A REAL ice cream experience with bold flavors and a smooth, creamy texture made using the finest ingredients.",
    card: "/polar.png",
    img1: "/react.png",
    img2: "/tailwind.png",
    img3: "/ts.png",
    img4: "/threejs.png",
    img5: "/c.png",
    url: "https://polar-ice-cream-henna.vercel.app/",
  },
  {
    id: 4,
    ttl: "Trainerz - Landing Page for an App",
    subttl:
      "Designed the Trainerz mobile app landing page, combining sleek UI and real-time workout tracking.",
    card: "/trainerz.png",
    img1: "/next.png",
    img2: "/tailwind.png",
    img3: "/ts.png",
    img4: "/threejs.png",
    img5: "/man.png",
    url: "https://firered222.github.io/Trainerz/",
  },
];

const Projects = () => {
  return (
    <section className={s.projects}>
      <div className={s.container}>
        <h2 className={s.ttl}>
          A small selection of <b className={s.bold}>recent projects</b>
        </h2>

        <div className={s.block}>
          {cards.map((card) => (
            <div className={s.card} key={card.id}>
              <div className={s.box}>
                <div className={s.cardbg}>
                  <motion.img
                    className={s.cardImg}
                    src={card.card}
                    alt={card.card}
                    initial={{ y: 30 }}
                    whileHover={{ scale: 1.28, rotate: -2.5, y: 24 }}
                    whileTap={{scale: 1.1}}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  />
                </div>
                <div className={s.info}>
                  <div className={s.text}>
                    <h2 className={s.cardTtl}>{card.ttl}</h2>
                    <p className={s.cardSubttl}>{card.subttl}</p>
                  </div>

                  <div className={s.cardFooter}>
                    <div className={s.tech}>
                      <div className={s.circle1}>
                        <LazyImg
                          className={s.img1}
                          src={card.img1}
                          alt={card.img1}
                        />
                      </div>
                      <div className={s.circle2}>
                        <LazyImg
                          className={s.img2}
                          src={card.img2}
                          alt={card.img2}
                        />
                      </div>
                      <div className={s.circle3}>
                        <LazyImg
                          className={s.img3}
                          src={card.img3}
                          alt={card.img3}
                        />
                      </div>
                      <div className={s.circle4}>
                        <LazyImg
                          className={s.img4}
                          src={card.img4}
                          alt={card.img4}
                        />
                      </div>
                      <div className={s.circle5}>
                        <LazyImg
                          className={s.img5}
                          src={card.img5}
                          alt={card.img5}
                        />
                      </div>
                    </div>

                    <Link className={s.routerLink} to={card.url} target="blanc">
                      <motion.div
                        className={s.linkBox}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                      >
                        <p className={s.link}>Check Live Site</p>

                        <svg
                          width="13"
                          height="14"
                          viewBox="0 0 13 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.292893 11.7929C-0.0976311 12.1834 -0.0976311 12.8166 0.292893 13.2071C0.683418 13.5976 1.31658 13.5976 1.70711 13.2071L0.292893 11.7929ZM13 1.5C13 0.947715 12.5523 0.5 12 0.5L3 0.500001C2.44771 0.5 2 0.947716 2 1.5C2 2.05228 2.44772 2.5 3 2.5L11 2.5L11 10.5C11 11.0523 11.4477 11.5 12 11.5C12.5523 11.5 13 11.0523 13 10.5L13 1.5ZM1.70711 13.2071L12.7071 2.20711L11.2929 0.792894L0.292893 11.7929L1.70711 13.2071Z"
                            fill="#CBACF9"
                          />
                        </svg>
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
