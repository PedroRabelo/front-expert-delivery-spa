import Image from "next/image";
import { IconArrowTopDown } from "../icon-family";
import Styles from "./styles.module.css";

export const UserProfile = () => {
  return (
    <div className={Styles.userProfile}>
      <div>
        <Image src="/user-avatar.png" alt="Usuário" width={48} height={48} />
      </div>
      <div className={Styles.userData}>
        <h3>Mark Clark</h3>
        <p>markclarck@gmail.com</p>
      </div>
      <div className={Styles.button}>
        <IconArrowTopDown color="black" />
      </div>
    </div>
  );
};
