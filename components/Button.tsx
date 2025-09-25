import { FC, ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
  classList?: string;
  iconPosition?: "left" | "right";
  children: ReactNode;
  icon?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({
  classList,
  children,
  iconPosition,
  icon,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${classList} bg-[#A259FF] hover:bg-transparent border-[2px] hover:text-[#A259FF] border-transparent hover:border-[#A259FF] 2duration-400 text-white font-semibold text-[16px] sm:py-[19px] px-[30px] rounded-[20px] flex justify-center gap-[12px] cursor-pointer`}
    >
      {iconPosition == "left" && icon && icon}
      {children}
      {iconPosition == "right" && icon && icon}
    </button>
  );
};

export default Button;
