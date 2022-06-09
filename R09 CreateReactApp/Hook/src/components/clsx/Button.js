import clsx from "clsx";
import styles from "./Button.module.css";

function Button({ primary }) {
  console.log({ [styles.active]: true });
  const classse = clsx(styles.btn, {
    [styles.primary]: primary,
    "d-flex": true,
  });

  return (
    <>
      <button
        className={clsx(styles.btn, {
          [styles.active]: true,
        })}
      >
        Click me
      </button>

      {/* clsx */}
      <button className={classse}>Click (clsx)</button>
    </>
  );
}

export default Button;
