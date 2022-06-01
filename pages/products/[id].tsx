import { FoodItem, PageTemplate } from "../../components";
import { TypePageProps, TypeParams } from "./types";

function Product({ product }: TypePageProps) {
  return (
    <PageTemplate
      title={`${product.name} - Restaurante XPTO`}
      description={`Descrição do ${product.name} no restaurante XPTO`}
      keywords={`${product.name}, Restaurante XPTO`}
    >
      <FoodItem {...product} />
    </PageTemplate>
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
