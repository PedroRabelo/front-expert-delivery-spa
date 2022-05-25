import {
  IconFire,
  IconStore,
  IconWallet,
  IconMap,
  IconKnife,
  IconMotorcycle,
  IconHome,
  IconBookmark,
  IconExplorer,
  IconDocument,
  IconGear,
  IconMail,
  IconArrowRight,
  IconArrowTopDown,
} from "../icon-family";

type IconBaseProps = {
  size?: string;
  color?: string;
  iconName: string;
};

export const IconBase = ({ iconName, size, color }: IconBaseProps) => {
  let IconComponent: JSX.Element;

  switch (iconName) {
    case "fire":
      IconComponent = <IconFire size={size} color={color} />;
      break;
    case "store":
      IconComponent = <IconStore size={size} color={color} />;
      break;
    case "wallet":
      IconComponent = <IconWallet size={size} color={color} />;
      break;
    case "map":
      IconComponent = <IconMap size={size} color={color} />;
      break;
    case "motorcycle":
      IconComponent = <IconMotorcycle size={size} color={color} />;
      break;
    case "knife":
      IconComponent = <IconKnife size={size} color={color} />;
      break;
    case "home":
      IconComponent = <IconHome size={size} color={color} />;
      break;
    case "bookmark":
      IconComponent = <IconBookmark size={size} color={color} />;
      break;
    case "explorer":
      IconComponent = <IconExplorer size={size} color={color} />;
      break;
    case "document":
      IconComponent = <IconDocument size={size} color={color} />;
      break;
    case "mail":
      IconComponent = <IconMail size={size} color={color} />;
      break;
    case "gear":
      IconComponent = <IconGear size={size} color={color} />;
      break;
    case "arrow-right":
      IconComponent = <IconArrowRight size={size} color={color} />;
      break;
    case "arrow-top-down":
      IconComponent = <IconArrowTopDown size={size} color={color} />;
      break;

    default:
      IconComponent = <IconFire size={size} color={color} />;
      break;
  }

  return IconComponent;
};
