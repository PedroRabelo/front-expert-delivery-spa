import Image from "next/image";
import {
  IconKnife,
  IconMoney,
  IconStar,
  IconTargetLocation,
} from "../icon-family";
import Styles from "./styles.module.css";

type Props = {
  name: string;
  rating: number;
  comments: number;
  food: string;
  distance: number;
  price: number;
  bonus: string;
  brandUrl: string;
};

export const HighlightsItem = ({
  name,
  brandUrl,
  rating,
  comments,
  food,
  price,
  distance,
  bonus,
}: Props) => {
  return (
    <div className={Styles.restaurant}>
      <div className={Styles.brand}>
        <Image src={brandUrl} alt={name} width={64} height={64} />
      </div>
      <div className={Styles.information}>
        <h3>{name}</h3>
        <div className="my-3">
          <div>
            <IconStar size={16} color="#FACD5D" />
            <span>{rating}</span>({comments})
          </div>
          <div>
            <IconKnife size={24} color="#A3A3A4" />
            {food}
          </div>
          <div>
            <IconMoney color="#A3A3A4" />
            {price}
          </div>
        </div>
        <div>
          <div>{bonus}</div>
          <div>
            <IconTargetLocation color="#A3A3A4" />
            {distance}
          </div>
        </div>
      </div>
    </div>
  );
};
