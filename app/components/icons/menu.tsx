import React from "react";
interface Props {
  onchangeActive: () => void;
}
export default function Menu(Props: Props) {
  const { onchangeActive } = Props;
  return (
    <svg
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex cursor-pointer lg:hidden"
      onClick={onchangeActive}
    >
      <path
        d="M1.34877 2.32612H16.6512C17.3869 2.32612 18 1.79746 18 1.16306C18 0.528663 17.3869 0 16.6512 0H1.34877C0.613079 0 0 0.528663 0 1.16306C0 1.79746 0.588556 2.32612 1.34877 2.32612Z"
        fill="white"
      />
      <path
        d="M1.34877 9.16303H16.6512C17.3869 9.16303 18 8.63437 18 7.99997C18 7.36558 17.3869 6.83691 16.6512 6.83691H1.34877C0.613079 6.83691 0 7.36558 0 7.99997C0 8.63437 0.588556 9.16303 1.34877 9.16303Z"
        fill="white"
      />
      <path
        d="M1.34877 16H16.6512C17.3869 16 18 15.4713 18 14.8369C18 14.2026 17.3869 13.6739 16.6512 13.6739H1.34877C0.613079 13.6739 0 14.2026 0 14.8369C0 15.4713 0.588556 16 1.34877 16Z"
        fill="white"
      />
    </svg>
  );
}
