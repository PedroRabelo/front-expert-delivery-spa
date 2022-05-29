import Head from "next/head";
import { Navbar, Sidebar, FoodItem } from "../../components";
import { TypePageProps, TypeParams } from "./types";

function Product({ product }: TypePageProps) {
  return (
    <>
      <Head>
        <title>Produto do Restaurante - {product.name}</title>
        <meta name="description" content="Categoria" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container m-auto flex">
        <Sidebar />
        <div className="grow p-8">
          <Navbar />
          <FoodItem {...product} />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ params }: TypeParams) {
  return {
    props: {
      id: params.id,
      product: {
        id: "1",
        name: "Gigantic Rodeo Burguer",
        imageUrl: "/foods/burger.jpg",
        deliveryFee: "$ 2.99 Delivery",
        rate: 4.3,
        reviews: 104,
        category: "burguers",
        deliveryTime: "45 - 55 min",
      },
    },
  };
}

export default Product;
