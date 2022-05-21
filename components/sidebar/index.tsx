import Link from "next/link";
import Styles from "./styles.module.css";

export const Sidebar = () => {
  return (
    <div className={Styles.sidebar}>
      <div className={Styles.header}>
        <p>
          <span>icon</span>Delivery APP
        </p>
      </div>
      <ul className={Styles.menu}>
        <li className={Styles.active}>
          <Link href="/">
            <a>
              <span>Icon</span>
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/explorar">
            <a>
              <span>Icon</span>
              Explorar
            </a>
          </Link>
        </li>
        <li>
          <Link href="/favoritos">
            <a>
              <span>Icon</span>
              Favoritos
            </a>
          </Link>
        </li>
        <li>
          <Link href="/pedidos">
            <a>
              <span>Icon</span>
              Pedidos
            </a>
          </Link>
        </li>
        <li>
          <Link href="/mensagens">
            <a>
              <span>Icon</span>
              Mensagens
            </a>
          </Link>
        </li>
        <li>
          <Link href="/conf">
            <a>
              <span>Icon</span>
              Configurações
            </a>
          </Link>
        </li>
      </ul>
      <div className={Styles.footer}>
        <div>componente usuário</div>
      </div>
    </div>
  );
};
