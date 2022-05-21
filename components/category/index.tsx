import Styles from "./styles.module.css";

type Props = {
  name: string;
  legend: string;
  iconName: string;
};

export const Category = ({ name, legend, iconName }: Props) => {
  return (
    <div className={Styles.card}>
      <div>{iconName}</div>
      <h3>{name}</h3>
      <p>{legend}</p>
    </div>
  );
};
