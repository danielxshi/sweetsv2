import { ReactNode } from "react";

type Props = {
  label: string;
  style?: string;
  children?: ReactNode;
};
const Button = ({ label, style, children }: Props) => {
  return (
    <>
      <button
        className={`${style} h-fit shadow-md uppercase px-4 py-2 border border-white text-white w-fit rounded-md flex flex-row align-middle text-base leading-none my-auto gap-2`}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
