import clsx from "clsx";
import styles from "./Button.module.scss";

function SCSSButton({ primary }) {
  const classse = clsx(styles.btn, {
    [styles.primary]: primary,
    "d-flex": true,
  });

  return (
    <>
      <button className={classse}>Click (clsx)</button>
    </>
  );
}

export default SCSSButton;
