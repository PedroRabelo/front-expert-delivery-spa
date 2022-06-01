import type { NextPage } from "next";
import { Categories, FoodsList, Highlights, PageTemplate } from "../components";

const Home: NextPage = () => {
  return (
    <PageTemplate
      title="Nibble Restaurantes"
      description="Descrição de Nibble Restaurantes"
    >
      <Categories />
      <Highlights />
      <FoodsList />
    </PageTemplate>
  );
};

export default Home;
