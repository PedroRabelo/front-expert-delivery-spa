import { NextPage } from "next";
import Head from "next/head";
import { DetailsItem, FoodsList, Navbar, Sidebar } from "../../components";
import Styles from "./restaurant.module.css";
import { TypePageProps, TypeParams } from "./types";

function Restaurant({ id }: TypePageProps) {
  return (
    <>
      <Head>
        <title>Restaurante - Burguer King</title>
        <meta name="description" content="Burguer King" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container m-auto flex">
        <Sidebar />
        <div className="grow p-8">
          <Navbar />
          <div>{id}</div>
          <div className={Styles.header}>
            <div className={Styles.details}>
              <h1>Burguer King</h1>
              <p>
                It is one of the most iconic and well-recognizable fast food
                restaurantes out there wich offers really amazing food and
                drinks.
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
        </div>
      </div>
    </>
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
