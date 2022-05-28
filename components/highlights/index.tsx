import Link from "next/link";
import { HighlightsItem } from "../highlights-item";
import { IconArrowRight } from "../icon-family";
import Styles from "./styles.module.css";

export const Highlights = () => {
  const data = [
    {
      name: "Burguer King",
      brandUrl: "/brands/burguer-king.svg",
      rating: 4.1,
      food: "Burguer",
      comments: 1487,
      price: 2,
      bonus: "Entrega grátis",
      distance: 6.2,
    },
    {
      name: "McDonalds",
      brandUrl: "/brands/mcdonalds.svg",
      rating: 5,
      food: "Burguer",
      comments: 1487,
      price: 1,
      bonus: "Entrega grátis",
      distance: 4.3,
    },
    {
      name: "KFC",
      brandUrl: "/brands/kfc.svg",
      rating: 4.6,
      food: "Burguer",
      comments: 1487,
      price: 2,
      bonus: "Entrega grátis",
      distance: 4,
    },
    {
      name: "Carrows",
      brandUrl: "/brands/carrows.svg",
      rating: 4.6,
      food: "Peixe",
      comments: 1487,
      price: 2,
      bonus: "Entrega grátis",
      distance: 4,
    },
    {
      name: "Pizza Hut",
      brandUrl: "/brands/pizza-hut.svg",
      rating: 4.6,
      food: "Burguer",
      comments: 1487,
      price: 2,
      bonus: "Entrega grátis",
      distance: 4,
    },
    {
      name: "Dominos Pizza",
      brandUrl: "/brands/dominos-pizza.svg",
      rating: 4.6,
      food: "Burguer",
      comments: 1487,
      price: 2,
      bonus: "Entrega grátis",
      distance: 4,
    },
  ];

  return (
    <div>
      <div className={Styles.header}>
        <h2>Destaques</h2>
        <Link href="/destaques">
          <a>
            Ver Todos
            <IconArrowRight size={12} color="#5B4AA3" />
          </a>
        </Link>
      </div>
      <div className="flex gap-6 justify-between flex-wrap">
        {data.map((item) => (
          <HighlightsItem key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
};
