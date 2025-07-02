import { useEffect, useState } from "react";
import s from "./Approach.module.css";
import { motion, AnimatePresence } from "framer-motion";


const phases = [
  {
    id: 1,
    phase: "Phase 1",
    ttl: "Development & Progress Update",
    subttl:
      "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.",
  },
  {
    id: 2,
    phase: "Phase 2",
    ttl: "Refinements & Collaboration",
    subttl:
      "You share your thoughts, and I start shaping the idea. Through sketches, feedback, and refinements, we iterate until the vision clicks just right.",
  },
  {
    id: 3,
    phase: "Phase 3",
    ttl: "Launch & Support",
    subttl:
      "Time to go live! I handle the launch with proper care and stick around to support, refine, and keep everything running smoothly.",
  },
];

const Approach = () => {
  const [revealedId, setRevealedId] = useState(null);


  const handleToggle = (id) => {
    setRevealedId(revealedId === id ? null : id);
  };

  const [clampedWidth, setClampedWidth] = useState(218); // 13.625rem
  const [secondaryValue, setSecondaryValue] = useState(90); // 5.625rem

  const clamp = (min, value, max) => Math.min(Math.max(value, min), max);

  const interpolate = (minW, maxW, minV, maxV, currentW) => {
    const t = (currentW - minW) / (maxW - minW);
    const lerped = minV + (1 - t) * (maxV - minV);
    return clamp(minV, lerped, maxV);
  };

  useEffect(() => {
    const updateValues = () => {
      const screenW = window.innerWidth;

      const width = interpolate(1300, 430, 218, 274, screenW);
      setClampedWidth(width);

      const secondary = interpolate(1300, 430, 90, 140, screenW);
      setSecondaryValue(secondary);
    };

    updateValues();
    window.addEventListener("resize", updateValues);
    return () => window.removeEventListener("resize", updateValues);
  }, []);
  return (
    <section className={s.approach}>
      <div className={s.container}>
        <h2 className={s.ttl}>
          My <b className={s.bold}>approach</b>
        </h2>

        <div className={s.block}>
          {phases.map((phase) => {
            const isRevealed = revealedId === phase.id;
            return (
              <div className={s.card} key={phase.id}>
                <motion.button
                  onClick={() => handleToggle(phase.id)}
                  className={s.btn}
                  initial={{ x: 115, y: 140 }}
                  animate={{
                    scale: isRevealed ? 0.6 : 1,
                    y: isRevealed ? secondaryValue : clampedWidth,
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  {phase.phase}
                </motion.button>

                <motion.div
                  className={s.background}
                  initial={false}
                  animate={{ opacity: isRevealed ? 1 : 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <div className={s.info}>
                    <h2 className={s.infoTtl}>{phase.ttl}</h2>
                    <p className={s.infoSubttl}>{phase.subttl}</p>
                  </div>
                </motion.div>

                <motion.div
                  className={s.foreground}
                  initial={false}
                  animate={{
                    opacity: isRevealed ? 0 : 1,
                    scale: isRevealed ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <div className={`${s.corner} ${s["corner--top-left"]}`}>
                    <svg
                      width="46"
                      height="46"
                      viewBox="0 0 46 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="1">
                        <path
                          d="M39.8906 23C39.8906 23.2859 39.777 23.5602 39.5749 23.7624C39.3727 23.9645 39.0984 24.0781 38.8125 24.0781H24.0781V38.8125C24.0781 39.0984 23.9645 39.3727 23.7624 39.5749C23.5602 39.777 23.2859 39.8906 23 39.8906C22.7141 39.8906 22.4398 39.777 22.2377 39.5749C22.0355 39.3727 21.9219 39.0984 21.9219 38.8125V24.0781H7.1875C6.90156 24.0781 6.62734 23.9645 6.42515 23.7624C6.22296 23.5602 6.10938 23.2859 6.10938 23C6.10938 22.7141 6.22296 22.4398 6.42515 22.2377C6.62734 22.0355 6.90156 21.9219 7.1875 21.9219H21.9219V7.1875C21.9219 6.90156 22.0355 6.62734 22.2377 6.42515C22.4398 6.22296 22.7141 6.10938 23 6.10938C23.2859 6.10938 23.5602 6.22296 23.7624 6.42515C23.9645 6.62734 24.0781 6.90156 24.0781 7.1875V21.9219H38.8125C39.0984 21.9219 39.3727 22.0355 39.5749 22.2377C39.777 22.4398 39.8906 22.7141 39.8906 23Z"
                          fill="#E4ECFF"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className={`${s.corner} ${s["corner--top-right"]}`}>
                    <svg
                      width="46"
                      height="46"
                      viewBox="0 0 46 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="1">
                        <path
                          d="M39.8906 23C39.8906 23.2859 39.777 23.5602 39.5749 23.7624C39.3727 23.9645 39.0984 24.0781 38.8125 24.0781H24.0781V38.8125C24.0781 39.0984 23.9645 39.3727 23.7624 39.5749C23.5602 39.777 23.2859 39.8906 23 39.8906C22.7141 39.8906 22.4398 39.777 22.2377 39.5749C22.0355 39.3727 21.9219 39.0984 21.9219 38.8125V24.0781H7.1875C6.90156 24.0781 6.62734 23.9645 6.42515 23.7624C6.22296 23.5602 6.10938 23.2859 6.10938 23C6.10938 22.7141 6.22296 22.4398 6.42515 22.2377C6.62734 22.0355 6.90156 21.9219 7.1875 21.9219H21.9219V7.1875C21.9219 6.90156 22.0355 6.62734 22.2377 6.42515C22.4398 6.22296 22.7141 6.10938 23 6.10938C23.2859 6.10938 23.5602 6.22296 23.7624 6.42515C23.9645 6.62734 24.0781 6.90156 24.0781 7.1875V21.9219H38.8125C39.0984 21.9219 39.3727 22.0355 39.5749 22.2377C39.777 22.4398 39.8906 22.7141 39.8906 23Z"
                          fill="#E4ECFF"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className={`${s.corner} ${s["corner--bottom-left"]}`}>
                    <svg
                      width="46"
                      height="46"
                      viewBox="0 0 46 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="1">
                        <path
                          d="M39.8906 23C39.8906 23.2859 39.777 23.5602 39.5749 23.7624C39.3727 23.9645 39.0984 24.0781 38.8125 24.0781H24.0781V38.8125C24.0781 39.0984 23.9645 39.3727 23.7624 39.5749C23.5602 39.777 23.2859 39.8906 23 39.8906C22.7141 39.8906 22.4398 39.777 22.2377 39.5749C22.0355 39.3727 21.9219 39.0984 21.9219 38.8125V24.0781H7.1875C6.90156 24.0781 6.62734 23.9645 6.42515 23.7624C6.22296 23.5602 6.10938 23.2859 6.10938 23C6.10938 22.7141 6.22296 22.4398 6.42515 22.2377C6.62734 22.0355 6.90156 21.9219 7.1875 21.9219H21.9219V7.1875C21.9219 6.90156 22.0355 6.62734 22.2377 6.42515C22.4398 6.22296 22.7141 6.10938 23 6.10938C23.2859 6.10938 23.5602 6.22296 23.7624 6.42515C23.9645 6.62734 24.0781 6.90156 24.0781 7.1875V21.9219H38.8125C39.0984 21.9219 39.3727 22.0355 39.5749 22.2377C39.777 22.4398 39.8906 22.7141 39.8906 23Z"
                          fill="#E4ECFF"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className={`${s.corner} ${s["corner--bottom-right"]}`}>
                    <svg
                      width="46"
                      height="46"
                      viewBox="0 0 46 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="1">
                        <path
                          d="M39.8906 23C39.8906 23.2859 39.777 23.5602 39.5749 23.7624C39.3727 23.9645 39.0984 24.0781 38.8125 24.0781H24.0781V38.8125C24.0781 39.0984 23.9645 39.3727 23.7624 39.5749C23.5602 39.777 23.2859 39.8906 23 39.8906C22.7141 39.8906 22.4398 39.777 22.2377 39.5749C22.0355 39.3727 21.9219 39.0984 21.9219 38.8125V24.0781H7.1875C6.90156 24.0781 6.62734 23.9645 6.42515 23.7624C6.22296 23.5602 6.10938 23.2859 6.10938 23C6.10938 22.7141 6.22296 22.4398 6.42515 22.2377C6.62734 22.0355 6.90156 21.9219 7.1875 21.9219H21.9219V7.1875C21.9219 6.90156 22.0355 6.62734 22.2377 6.42515C22.4398 6.22296 22.7141 6.10938 23 6.10938C23.2859 6.10938 23.5602 6.22296 23.7624 6.42515C23.9645 6.62734 24.0781 6.90156 24.0781 7.1875V21.9219H38.8125C39.0984 21.9219 39.3727 22.0355 39.5749 22.2377C39.777 22.4398 39.8906 22.7141 39.8906 23Z"
                          fill="#E4ECFF"
                        />
                      </g>
                    </svg>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Approach;
