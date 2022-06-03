import Head from "next/head";
import { Highlights, Navbar, PageTemplate, Sidebar } from "../../components";

export type TypePageProps = {
  id: string;
};

export type TypeParams = {
  params: {
    id: string;
  };
};

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
