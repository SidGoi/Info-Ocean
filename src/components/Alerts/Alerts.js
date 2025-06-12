import Image from "next/image";
import style from "./Alerts.module.css";

const Alerts = () => {
  return (
    <div className={style.Alerts}>
      <Image src={"/assets/development.svg"} height={20} width={20} />
      This page is under development!
    </div>
  );
};

export default Alerts;
