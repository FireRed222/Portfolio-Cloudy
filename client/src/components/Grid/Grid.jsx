import { useState } from "react";
import s from "./Grid.module.css";
import { motion, AnimatePresence } from "framer-motion";

const Grid = () => {
  const [copied, setCopied] = useState(false);
  const email = "temurrakhmatov8@email.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <section className={s.grid}>
      <div className={s.container}>
        <div className={s.block1}>
          <img className={s.img} src="/box.png" alt="box" />
          <div className={s.box1}>
            <img className={s.img1} src="/box1.png" alt="box1" />
            <img className={s.img2} src="/box2.png" alt="box2" />
          </div>
        </div>
        <div className={s.block2}>
          <div className={s.box2}>
            <img className={s.img3} src="/box3.png" alt="box3" />
            <div className={s.email}>
              <div className={s.info}>
                <p className={s.emailText}>
                  Do you want to start a project together?
                </p>

                <button onClick={handleCopy}>
                  <AnimatePresence mode="wait" initial={false}>
                    {copied ? (
                      <motion.svg
                        key="tick"
                        initial={{ scale: 0, rotate: -90, opacity: 0 }}
                        animate={{ scale: 1, rotate: 0, opacity: 1 }}
                        exit={{
                          scale: 0.5,
                          opacity: 0,
                          transition: { duration: 0.1 },
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 15,
                        }}
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.5 7L6 9.5L10.5 4.5"
                          stroke="#00FF7F"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </motion.svg>
                    ) : (
                      <motion.svg
                        key="copy"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.08331 5.639C4.08331 5.22639 4.24722 4.83068 4.53898 4.53892C4.83074 4.24716 5.22645 4.08325 5.63906 4.08325H10.6942C10.8985 4.08325 11.1008 4.12349 11.2896 4.20168C11.4783 4.27986 11.6498 4.39446 11.7943 4.53892C11.9388 4.68339 12.0534 4.85489 12.1316 5.04364C12.2097 5.23239 12.25 5.4347 12.25 5.639V10.6942C12.25 10.8985 12.2097 11.1008 12.1316 11.2895C12.0534 11.4783 11.9388 11.6498 11.7943 11.7943C11.6498 11.9387 11.4783 12.0533 11.2896 12.1315C11.1008 12.2097 10.8985 12.2499 10.6942 12.2499H5.63906C5.43476 12.2499 5.23246 12.2097 5.0437 12.1315C4.85495 12.0533 4.68345 11.9387 4.53898 11.7943C4.39452 11.6498 4.27992 11.4783 4.20174 11.2895C4.12355 11.1008 4.08331 10.8985 4.08331 10.6942V5.639Z"
                          stroke="#E4ECFF"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.34033 9.76325C2.16145 9.66127 2.01266 9.51387 1.909 9.33596C1.80535 9.15804 1.7505 8.95591 1.75 8.75V2.91667C1.75 2.275 2.275 1.75 2.91667 1.75H8.75C9.1875 1.75 9.4255 1.97458 9.625 2.33333"
                          stroke="#E4ECFF"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </motion.svg>
                    )}
                  </AnimatePresence>
                  {copied ? "Copied!" : "Copy my email address"}
                </button>
              </div>
            </div>
          </div>
          <img className={s.img4} src="/box4.png" alt="box4" />
        </div>
      </div>
    </section>
  );
};

export default Grid;
