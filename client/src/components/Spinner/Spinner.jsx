import React from "react";
import s from "./Spinner.module.css";

const Spinner = ({ minHeight = "100dvh" }) => {
  return (
    <section
      className={s.spinner}
      style={{ "--spinner-min-height": minHeight }}
    >
      <div className={s.container}>
        <span className={s.loader}></span>
      </div>
    </section>
  );
};

export default Spinner;
