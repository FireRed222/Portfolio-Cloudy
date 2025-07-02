import { Link } from "react-router-dom";
import { Spotlight } from "../Spotlight/Spotlight";
import s from "./Header.module.css";
import { motion } from "framer-motion";

const Header = () => {
  const positions = ["top-0.1", "top-0.5"];
  return (
    <header className={s.header}>
      {positions.map((pos, i) => (
        <Spotlight
          key={`left-${i}`}
          fill="white"
          scale={0.1}
          className={`left-0 ${pos}`}
        />
      ))}
      <div className={s.container}>
        <p className={s.ttl}>Dynamic Web Magic with REACT.js</p>
        <div className={s.block}>
          <h2 className={s.subttl}>
            Transforming Concepts into Seamless{" "}
            <b className={s.bold}>User Experiences</b>
          </h2>
          <p className={s.text}>
            Hi! I’m Temur, a React.js Developer based in Uzbekistan
          </p>
          <Link className={s.link} to={"/projects"}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, rotate: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              See my work
              <svg
                width="13"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.292893 11.7929C-0.0976311 12.1834 -0.0976311 12.8166 0.292893 13.2071C0.683418 13.5976 1.31658 13.5976 1.70711 13.2071L0.292893 11.7929ZM13 1.5C13 0.947715 12.5523 0.5 12 0.5L3 0.500001C2.44771 0.5 2 0.947716 2 1.5C2 2.05228 2.44772 2.5 3 2.5L11 2.5L11 10.5C11 11.0523 11.4477 11.5 12 11.5C12.5523 11.5 13 11.0523 13 10.5L13 1.5ZM1.70711 13.2071L12.7071 2.20711L11.2929 0.792894L0.292893 11.7929L1.70711 13.2071Z"
                  fill="white"
                />
              </svg>
            </motion.button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
