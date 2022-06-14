import { NextPage } from "next";
import Link from "next/link";
import { PageTemplate } from "../components";
import {
  IconArrowRight,
  IconBookmark,
  IconCard,
  IconInviteFriend,
  IconMail,
  IconPaymentMethod,
  IconProfile,
  IconSupport,
  IconVoucher,
  IconWallet,
} from "../components/icon-family";
import Styles from "../styles/settings.module.css";

const Settings: NextPage = () => {
  return (
    <PageTemplate title="Configurações - Nibble">
      <div className={Styles.container}>
        <h1>Configurações</h1>
        <h2>Geral</h2>
        <ul>
          <li>
            <Link href="#">
              <a>
                <div>
                  <IconProfile color="#5039ed" />
                  Informações pessoais
                </div>
                <IconArrowRight color="#a3a3a4" size={16} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>
                <div>
                  <IconBookmark color="#fb6d3a" />
                  Endereços salvos
                </div>
                <IconArrowRight color="#a3a3a4" size={16} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>
                <div>
                  <IconMail color="#facd5d" />
                  Preferências de Marketing
                </div>
                <IconArrowRight color="#a3a3a4" size={16} />
              </a>
            </Link>
          </li>
        </ul>
        <h2>Pagamentos</h2>
        <ul>
          <li>
            <Link href="#">
              <a>
                <div>
                  <IconPaymentMethod color="#5039ed" />
                  Métodos de pagamentos
                </div>
                <IconArrowRight color="#a3a3a4" size={16} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>
                <div>
                  <IconCard color="#fb6d3a" />
                  Meus cartões
                </div>
                <IconArrowRight color="#a3a3a4" size={16} />
              </a>
            </Link>
          </li>
        </ul>
        <h2>Outros</h2>
        <ul>
          <li>
            <Link href="#">
              <a>
                <div>
                  <IconSupport color="#5039ed" />
                  Suporte
                </div>
                <IconArrowRight color="#a3a3a4" size={16} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>
                <div>
                  <IconInviteFriend color="#fb6d3a" />
                  Convide um amigo
                </div>
                <IconArrowRight color="#a3a3a4" size={16} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>
                <div>
                  <IconVoucher color="#facd5d" />
                  Descontos
                </div>
                <IconArrowRight color="#a3a3a4" size={16} />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </PageTemplate>
  );
};

export default Settings;
