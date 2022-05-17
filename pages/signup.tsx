import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Button, InputText, PageHead } from "../components";

const Signup: NextPage = () => {
  return (
    <>
      <PageHead
        title="Cadastro"
        description="Sistema de delivery"
        keywords="delivery, entrega de comida"
      />

      <div className="h-screen flex flex-col lg:flex-row">
        <div className="bg-indigo-100 md:basis-full lg:basis-4/12 rounded-r-2xl">
          [imagem]
        </div>
        <div className="lg:basis-8/12 flex">
          <div className="max-w-2xl w-4/5 m-auto">
            <h1 className="font-bold text-4xl mb-3">Criar uma conta</h1>
            <p className="text-slate-700 mb-14">
              Por favor, cria uma conta para continuar utilizando nosso serviço
            </p>
            <InputText
              type="text"
              label="Nome Completo"
              placeholder="Informe o nome completo"
            />
            <InputText
              type="email"
              label="Endereço de e-mail"
              placeholder="Informe o e-mail"
            />
            <InputText
              type="password"
              label="Senha"
              placeholder="Informe sua senha"
            />
            <Button className="bg-indigo-600 w-full p-4 text-white text-xl">
              Criar conta
            </Button>

            <p className="mt-6 text-center text-slate-700 mb-14">
              Você já tem uma conta?{" "}
              <Link href="/login">
                <a className="mt-6 text-orange-600 font-bold hover:text-orange-900">
                  Acesse aqui
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
