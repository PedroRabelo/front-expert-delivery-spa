import Link from "next/link";
import {
  IconArrowTopDown,
  IconDiscount,
  IconFilter,
  IconShoppingBag,
  IconShoppingCart,
  IconTargetLocation,
} from "../icon-family";
import { SearchInput } from "../search";
import Styles from "./styles.module.css";

export const Navbar = () => {
  return (
    <div className={Styles.navbar}>
      <ul className={Styles.nav}>
        <li>
          <Link href={"/"}>
            <a>
              <IconTargetLocation size={24} color="#503E9D" />
              San Francisco, CA
              <IconArrowTopDown size={16} color="#000000" />
            </a>
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <a>
              <IconShoppingBag color="#FB6D3A" />
              Retirar
              <IconArrowTopDown size={16} color="#000000" />
            </a>
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <a>
              <IconDiscount color="#FACD5D" />
              Ofertas
              <IconArrowTopDown size={16} color="#000000" />
            </a>
          </Link>
        </li>
      </ul>

      <SearchInput />
      <ul>
        <li>
          <button className={Styles.filterButton}>
            <IconFilter size={48} color="#ffffff" />
          </button>
        </li>
        <li>
          <button className={Styles.cartButton}>
            <IconShoppingCart size={48} color="#ffffff" />
          </button>
        </li>
      </ul>
      <div></div>
    </div>
  );
};
