import Image from "next/image";
import Link from "next/link";
import {
  IconKnife,
  IconMoney,
  IconStar,
  IconTargetLocation,
} from "../icon-family";
import Styles from "./styles.module.css";
import { TypePageProps } from "./types";

export const HighlightsItem = ({
  id,
  name,
  brandUrl,
  rating,
  comments,
  food,
  price,
  distance,
  bonus,
}: TypePageProps) => {
  return (
    <div className={Styles.restaurant}>
      <Link href={`/restaurants/${id}`}>
        <a>
          <div className={Styles.brand}>
            <Image src={brandUrl} alt={name} width={64} height={64} />
          </div>
        </a>
      </Link>

      <div className={Styles.information}>
        <h3>
          <Link href={`/restaurants/${id}`}>
            <a>{name}</a>
          </Link>
        </h3>
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
