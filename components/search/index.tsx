import { IconSearch } from "../icon-family";
import Styles from "./styles.module.css";

export const SearchInput = () => {
  return (
    <div className={Styles.inputSearch}>
      <IconSearch size={20} color="#000000" />
      <input placeholder="Pesquise aqui" />
    </div>
  );
};
