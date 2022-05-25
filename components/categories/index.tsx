import Link from "next/link";
import { Category } from "../category";

export const Categories = () => {
  const categories = [
    {
      name: "Popular",
      legend: "+286 opções",
      iconName: "fire",
      backgroundSection: "#FB6D3A",
    },
    {
      name: "Delivery",
      legend: "+1843 opções",
      iconName: "motorcycle",
      backgroundSection: "#503E9D",
    },
    {
      name: "Alta Classe",
      legend: "+25 opções",
      iconName: "wallet",
      backgroundSection: "#FACD5D",
    },
    {
      name: "Jantar",
      legend: "+286 opções",
      iconName: "knife",
      backgroundSection: "#FB6D3A",
    },
    {
      name: "Para Retirar",
      legend: "+143 opções",
      iconName: "store",
      backgroundSection: "#503E9D",
    },
    {
      name: "Mais Próximos",
      legend: "+25 opções",
      iconName: "map",
      backgroundSection: "#FACD5D",
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
      <div className="flex gap-6 justify-between">
        {categories.map((category) => (
          <Category key={category.name} {...category} />
        ))}
      </div>
    </div>
  );
};
