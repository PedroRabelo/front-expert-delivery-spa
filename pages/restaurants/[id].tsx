import { DetailsItem, FoodsList, PageTemplate } from "../../components";
import Styles from "./restaurant.module.css";
import { TypePageProps, TypeParams } from "./types";

function Restaurant({ id }: TypePageProps) {
  return (
    <PageTemplate
      title="Restaurante - Burguer King"
      description="Restaurante Burguer King"
      keywords="Restaurante, Burguer King"
    >
      <div>{id}</div>
      <div className={Styles.header}>
        <div className={Styles.details}>
          <h1>Burguer King</h1>
          <p>
            It is one of the most iconic and well-recognizable fast food
            restaurantes out there wich offers really amazing food and drinks.
          </p>
        </div>
        <div className={Styles.tags}>
          <span>Entrega grátis</span>
          <span>Compre 1 leve 2</span>
          <span>Abre às 12h</span>
        </div>
      </div>
      <div className="mb-12">
        <DetailsItem
          rate={4.5}
          reviews={1876}
          category="Burger"
          price={1}
          distance="4,4km (Irving St, San Francisco, California"
        />
      </div>
      <FoodsList />
    </PageTemplate>
  );
}

export async function getServerSideProps({ params }: TypeParams) {
  return {
    props: {
      id: params.id,
    },
  };
}

export default Restaurant;
