import Image from "next/image";
import styles from "./IO_Button.module.css";

const IO_Button = (params) => {
  return (
    <button className={`${styles.btn}`}>
      {params.title}
      <Image
        className={styles.btnarrow}
        width={100}
        height={100}
        src={"/assets/arrow.svg"}
        alt="btn-arrow"
      />
    </button>
  );
};

export default IO_Button;
