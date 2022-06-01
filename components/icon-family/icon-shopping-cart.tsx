import { IconProps } from "../../types";

export const IconShoppingCart = (props: IconProps) => {
  const { size, color } = props;

  return (
    <svg
      width={size || "48"}
      height={size || "48"}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* <rect width="48" height="48" rx="10" fill="#FB6D3A"/> */}

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 14V16H16L19.6 23.59L18.24 26.04C18.09 26.32 18 26.65 18 27C18 28.1046 18.8954 29 20 29H32V27H20.42C20.2819 27 20.17 26.8881 20.17 26.75C20.17 26.7 20.18 26.66 20.2 26.63L21.1 25H28.55C29.3 25 29.96 24.58 30.3 23.97L33.88 17.5C33.95 17.34 34 17.17 34 17C34 16.4477 33.5523 16 33 16H18.21L17.27 14H14ZM30 30C28.89 30 28 30.89 28 32C28 33.1046 28.8954 34 30 34C31.1046 34 32 33.1046 32 32C32 30.89 31.1 30 30 30ZM18 32C18 30.89 18.89 30 20 30C21.1 30 22 30.89 22 32C22 33.1046 21.1046 34 20 34C18.8954 34 18 33.1046 18 32Z"
        fill="white"
      />
    </svg>
  );
};
