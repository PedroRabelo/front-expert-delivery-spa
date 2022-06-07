import { useFilter } from "../../stores";
import { IconFilter, IconShoppingCart } from "../icon-family";
import { SearchInput } from "../search";
import { LocationsFilterDropdown } from "./locations-filter-dropdown";
import { OffersFilterDropdown } from "./offers-filter-dropdown";
import { PickupFilterDropdown } from "./pickup-dropdown";
import Styles from "./styles.module.css";

export const Navbar = () => {
  const { toggleModal } = useFilter((store) => store);

  return (
    <div className={Styles.navbar}>
      <ul className={Styles.nav}>
        <li>
          <LocationsFilterDropdown />
        </li>
        <li>
          <PickupFilterDropdown />
        </li>

        <li>
          <OffersFilterDropdown />
        </li>
      </ul>

      <SearchInput />
      <ul className={Styles.navButtons}>
        <li>
          <button className={Styles.filterButton} onClick={() => toggleModal()}>
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
