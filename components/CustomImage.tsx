import Image from "next/image";
import { FC } from "react";

interface ImageType {
  classList?: string;
  src: string;
  alt: string;
  W: number;
  H: number;
}

const CustomImage: FC<ImageType> = ({ classList, src, alt, W, H }) => {
  return (
    <Image
      className={`${classList} w-[${W}px] h-[${H}px]`}
      src={src}
      alt={alt}
      width={W}
      height={H}
      priority
    />
  );
};

export default CustomImage;
