import Link from "next/link";
import { Category } from "../category";

export const Categories = () => {
  const categories = [
    {
      name: "Popular",
      legend: "+286 opções",
      iconName: "fire",
    },
    {
      name: "Delivery",
      legend: "+1843 opções",
      iconName: "bike",
    },
    {
      name: "Alta Classe",
      legend: "+25 opções",
      iconName: "wallet",
    },
  ];
  return (
    <div>
      <div className="flex">
        <h2 className="grow">Explorar categorias</h2>
        <Link href="/categories">
          <a>Ver todas</a>
        </Link>
      </div>
      <div className="flex gap-6">
        {categories.map((category) => (
          <Category key={category.name} {...category} />
        ))}
      </div>
    </div>
  );
};
