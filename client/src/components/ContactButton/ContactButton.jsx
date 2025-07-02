import { useId, useRef, useState } from "react";
import s from "./ContactButton.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { useOutsideClick } from "../../Hooks/useOutsideClick";
import { useForm } from "react-hook-form";
import useTelegramStore from "../../store/useTelegramStore";

const ContactButton = () => {
  const [active, setActive] = useState(false);
  const ref = useRef(null);
  const id = useId();

  useOutsideClick(ref, () => setActive(false));

  const { register, handleSubmit, reset } = useForm();
  const sendMessage = useTelegramStore((state) => state.sendMessage);
  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = async (data) => {
    try {
      await sendMessage({
        name: data.name,
        email: data.email,
        message: data.message,
      });
      setShowSuccess(true);
      reset();

      setTimeout(() => setShowSuccess(false), 2000);
    } catch (err) {
      console.error("Failed to send:", err);
    }
  };

  return (
    <div className={s.container}>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.25, 1, 0.25, 1] }}
            exit={{ opacity: 0 }}
            className={s.overlay}
          />
        )}
      </AnimatePresence>

      <>
        <motion.button
          layoutId={`contact-${id}`}
          onClick={() => setActive(true)}
          className={s.mainBtn}
          style={{
            opacity: active ? "0" : "1",
          }}
        >
          Contact Me Now{" "}
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.22698 11.7929C0.836451 12.1834 0.836451 12.8166 1.22698 13.2071C1.6175 13.5976 2.25066 13.5976 2.64119 13.2071L1.22698 11.7929ZM13.9341 1.5C13.9341 0.947715 13.4864 0.5 12.9341 0.5L3.93408 0.500001C3.3818 0.5 2.93408 0.947716 2.93408 1.5C2.93408 2.05228 3.3818 2.5 3.93408 2.5L11.9341 2.5L11.9341 10.5C11.9341 11.0523 12.3818 11.5 12.9341 11.5C13.4864 11.5 13.9341 11.0523 13.9341 10.5L13.9341 1.5ZM2.64119 13.2071L13.6412 2.20711L12.227 0.792894L1.22698 11.7929L2.64119 13.2071Z"
              fill="white"
            />
          </svg>
        </motion.button>

        <AnimatePresence>
          {active && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                exit={{ opacity: 0 }}
                className={s.overlay}
              />
              <div className={s.wrapper}>
                <motion.div
                  layoutId={`contact-${id}`}
                  ref={ref}
                  className={s.block}
                >
                  <div className={s.box}>
                    <h2 className={s.ttl}>Contact Me</h2>
                    <button
                      onClick={() => setActive(false)}
                      className={s.closeBtn}
                    >
                      ✕
                    </button>
                  </div>
                  <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                    <input
                      {...register("name")}
                      type="text"
                      placeholder="Name"
                      required
                      className={s.input}
                    />
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="Email"
                      className={s.input}
                      required
                    />
                    <textarea
                      {...register("message")}
                      placeholder="Message"
                      rows="3"
                      className={s.textarea}
                      required
                    ></textarea>
                    <AnimatePresence>
                      <motion.p
                        className={s.success}
                        initial={false}
                        animate={{ opacity: showSuccess ? 1 : 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        ✅ Message sent successfully!
                      </motion.p>
                    </AnimatePresence>
                    <button type="submit" className={s.btn}>
                      Send Message
                    </button>
                  </form>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>
      </>
    </div>
  );
};

export default ContactButton;
