import Link from "next/link";
import { FoodItem } from "../food-item";
import { IconArrowRight } from "../icon-family";
import Styles from "./styles.module.css";

export const FoodsList = () => {
  const data = [
    {
      id: "1",
      name: "Gigantic Rodeo Burguer",
      imageUrl: "/foods/burger.jpg",
      deliveryFee: "$ 2.99 Delivery",
      rate: 4.3,
      reviews: 104,
      category: "burguers",
      deliveryTime: "45 - 55 min",
    },
    {
      id: "2",
      name: "Peperoni Pie",
      imageUrl: "/foods/pizza-peperoni.jpg",
      deliveryFee: "$ 1.99 Delivery",
      rate: 4.6,
      reviews: 2104,
      category: "Pie",
      deliveryTime: "45 - 55 min",
    },
    {
      id: "3",
      name: "Natural Vegetable Rice",
      imageUrl: "/foods/vegan.jpg",
      deliveryFee: "$ 1.99 Delivery",
      rate: 4.6,
      reviews: 2104,
      category: "Rice",
      deliveryTime: "45 - 55 min",
    },
    {
      id: "4",
      name: "Delicious Cheese Pie",
      imageUrl: "/foods/vegan.jpg",
      deliveryFee: "$ 1.99 Delivery",
      rate: 4.6,
      reviews: 2104,
      category: "Rice",
      deliveryTime: "45 - 55 min",
    },
    {
      id: "5",
      name: "Chefs Burger Deluxe",
      imageUrl: "/foods/vegan.jpg",
      deliveryFee: "$ 1.99 Delivery",
      rate: 4.6,
      reviews: 2104,
      category: "Rice",
      deliveryTime: "45 - 55 min",
    },
    {
      id: "6",
      name: "Vegetable Sweeker",
      imageUrl: "/foods/vegan.jpg",
      deliveryFee: "$ 1.99 Delivery",
      rate: 4.6,
      reviews: 2104,
      category: "Rice",
      deliveryTime: "45 - 55 min",
    },
  ];

  return (
    <div className="mb-12">
      <div className={Styles.header}>
        <h2>Pedidos populares</h2>
        <div>Hoje</div>
      </div>
      <div className={Styles.container}>
        {data.map((item) => (
          <FoodItem key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
};
