import { IconProps } from "../../types";

export const IconKnife = (props: IconProps) => {
  const { color, size } = props;
  return (
    <svg
      width={size || "48"}
      height={size || "48"}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 9C0 4.02944 4.02944 0 9 0H39C43.9706 0 48 4.02944 48 9V39C48 43.9706 43.9706 48 39 48H9C4.02944 48 0 43.9706 0 39V9Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.3333 20.4H22.7778V12H25.2222V20.4C25.2222 22.944 23.1933 25.008 20.6389 25.164V36H17.5833V25.164C15.0289 25.008 13 22.944 13 20.4V12H15.4444V20.4H17.8889V12H20.3333V20.4ZM28.8889 26.4V16.8C28.8889 14.688 31.6267 12 35 12V36H31.9444V26.4H28.8889Z"
        fill={color || "#FB6D3A"}
      />
    </svg>
  );
};
