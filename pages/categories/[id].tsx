import Head from "next/head";
import { Highlights, Navbar, PageTemplate, Sidebar } from "../../components";
import { TypePageProps, TypeParams } from "./types";

function Categories({ id }: TypePageProps) {
  return (
    <PageTemplate
      title={`${id} - Categoria de Restaurante`}
      description={`Lista de restaurante da categoria`}
    >
      <Highlights title={id} />
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

export default Categories;
