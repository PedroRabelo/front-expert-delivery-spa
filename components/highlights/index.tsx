import Link from "next/link";
import { IconArrowRight } from "../icon-family";
import Styles from "./styles.module.css";

export const Highlights = () => {
  return (
    <div>
      <div className={Styles.header}>
        <h2>Destaques</h2>
        <Link href="/destaques">
          <a>
            Ver Todos
            <IconArrowRight size={12} color="#5B4AA3" />
          </a>
        </Link>
      </div>
      <div>[Destaques]</div>
    </div>
  );
};
