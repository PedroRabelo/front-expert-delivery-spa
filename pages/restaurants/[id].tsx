import Image from "next/image";
import { DetailsItem, FoodsList, PageTemplate } from "../../components";
import { IconHeart } from "../../components/icon-family";
import Styles from "./restaurant.module.css";
import { TypePageProps, TypeParams } from "./types";

function Restaurant({ id }: TypePageProps) {
  return (
    <PageTemplate
      title="Restaurante - Burguer King"
      description="Restaurante Burguer King"
      keywords="Restaurante, Burguer King"
    >
      <div className={Styles.header}>
        <div className={Styles.cover}>
          <div className={Styles.image}>
            <Image src="/cover.jpg" layout="fill" alt="Capa" />
          </div>
          <div className={Styles.brand}>
            <Image
              src="/brands/burguer-king.svg"
              width={96}
              height={96}
              alt="Marca"
            />
          </div>
          <button className={Styles.favoriteButton}>
            <IconHeart size={20} />
          </button>
        </div>
        <div className={Styles.details}>
          <div className="flex flex-col md:flex-row mb-3">
            <h1>Burguer King</h1>
            <div className={Styles.tags}>
              <span className="tag-purple">Entrega grátis</span>
              <span className="tag-orange">Compre 1 leve 2</span>
              <span className="tag-gray">Abre às 12h</span>
            </div>
          </div>

          <p>
            It is one of the most iconic and well-recognizable fast food
            restaurantes out there wich offers really amazing food and drinks.
          </p>
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
