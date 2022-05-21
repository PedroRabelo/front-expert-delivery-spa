import Styles from "./styles.module.css";

export const Navbar = () => {
  return (
    <div className={Styles.navbar}>
      <div className="flex items-center">
        <div>San Francisco, CA</div>
        <div>Retirar</div>
        <div>Ofertas</div>
      </div>
      <input className={Styles.inputSearch} placeholder="Pesquise aqui" />
      <div>
        <button>FIL</button>
        <button>CKT</button>
      </div>
    </div>
  );
};
