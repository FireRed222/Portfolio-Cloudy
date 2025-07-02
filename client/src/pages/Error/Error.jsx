import { Link } from "react-router-dom";
import s from "./Error.module.css";
import { motion } from "framer-motion";

const Error = () => {
  return (
    <section className={s.error}>
      <div className={s.back}></div>
      <div className={s.container}>
        <motion.h1 className={s.ttl} whileHover={{scale: 1.2}} whileTap={{scale: 1.3, rotate: 360, color: "#cbacf9"}}>404</motion.h1>
        <h2 className={s.subttl}>This page is outside of the universe</h2>

        <p className={s.text}>
          The page you are trying to access doesn't exist or has been moved.{" "}
          <br /> Try going back to our homepage.
        </p>
        <Link to={"/"}>
          <motion.button
            className={s.btn}
            whileHover={{
              scale: 1.05,
              background: "linear-gradient(to right, #6366f1, #8b5cf6)",
              boxShadow: "0 0 20px rgba(139, 92, 246, 0.6)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            Go to homepage
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default Error;
