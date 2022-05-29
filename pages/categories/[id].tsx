import Head from "next/head";
import { Highlights, Navbar, Sidebar } from "../../components";
import { TypePageProps, TypeParams } from "./types";

function Categories({ id }: TypePageProps) {
  return (
    <>
      <Head>
        <title>{id} Categoria do restaurante</title>
        <meta name="description" content="Categoria" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container m-auto flex">
        <Sidebar />
        <div className="grow p-8">
          <Navbar />
          <Highlights title={id} />
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

export default Categories;
