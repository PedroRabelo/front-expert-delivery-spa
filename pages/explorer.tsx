import type { NextPage } from "next";
import Head from "next/head";
import {
  FoodsList,
  Highlights,
  Navbar,
  PageTemplate,
  Sidebar,
} from "../components";

const Explorer: NextPage = () => {
  return (
    <PageTemplate
      title="Exploar - Categoria de restaurantes"
      description="Lista de restaurantes"
    >
      <Highlights title="Restaurantes próximos" />
      <FoodsList />
    </PageTemplate>
  );
};

export default Explorer;
