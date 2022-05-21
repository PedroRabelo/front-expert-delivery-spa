import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Button, InputText, PageHead } from "../components";

const Login: NextPage = () => {
  return (
    <>
      <PageHead
        title="Login"
        description="Sistema de delivery"
        keywords="delivery, entrega de comida"
      />

      <div className="h-screen flex flex-col lg:flex-row">
        <div className="bg-indigo-100 md:basis-full lg:basis-4/12 rounded-r-2xl">
          [imagem]
        </div>
        <div className="lg:basis-8/12 flex">
          <div className="max-w-2xl w-4/5 m-auto">
            <h1 className="font-bold text-4xl mb-3">Bem vindo</h1>
            <p className="mb-14">
              Autentique-se para continuar usando o serviço
            </p>
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
            <Button className="bg-indigo-200 text-xl text-indigo-600">
              Login
            </Button>
            <div className="block text-center p-6">
              <Link href="/forgot">
                <a className="mt-6 text-slate-700 mb-6 hover:text-slate-600">
                  Recuperar a senha
                </a>
              </Link>
            </div>
            <Link href="/signup">
              <a className="mt-6 bg-indigo-600 w-full text-center rounded-xl block p-4 text-white text-xl mb-6 hover:text-gray-300">
                Criar uma conta
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
