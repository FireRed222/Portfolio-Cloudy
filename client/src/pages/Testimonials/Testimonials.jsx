import { Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import s from "./Testimonials.module.css";
import { motion } from "framer-motion";
import Spinner from "../../components/Spinner/Spinner";
const GetCards = lazy(() => import("../../components/GetCards/GetCards"));

const logos = [
  {
    id: 1,
    src: "/cloudinary.png",
    url: "https://cloudinary.com/",
  },
  {
    id: 2,
    src: "/appwrite.png",
    url: "https://appwrite.io/",
  },
  {
    id: 3,
    src: "/hostinger.png",
    url: "https://hostinger.com/",
  },
  {
    id: 4,
    src: "/streamlogo.png",
    url: "https://getstream.io/",
  },
  {
    id: 5,
    src: "/docker.png",
    url: "https://docker.com/",
  },
];

const Testimonials = () => {
  return (
    <section className={s.testimonials}>
      <div className={s.container}>
        <h2 className={s.ttl}>
          Kind words from <b className={s.bold}>satisfied clients</b>
        </h2>
        <Suspense fallback={<Spinner minHeight="none"/>}>
          <GetCards />
        </Suspense>

        <div className={s.logos}>
          {logos.map((logo) => (
            <Link to={logo.url} target="blanc" key={logo.id}>
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={s.img}
                src={logo.src}
                alt={logo.src}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
