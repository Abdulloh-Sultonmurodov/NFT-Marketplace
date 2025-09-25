import { Button, CustomImage } from "@/components";
import { HamburgerMenu, SignUpIcon } from "@/icons";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Header = () => {
  const t = useTranslations("headerContent");

  return (
    <header className="px-[30px] lg:px-[50px] py-[15px] lg:py-[20px] flex justify-between items-center">
      <Link href={"/"}>
        <CustomImage
          classList="!w-[182px] !h-[24px] lg:!w-[243px] lg:!h-[32px]"
          src="/site-logo.svg"
          alt="Site Logo"
          W={243}
          H={32}
        />
      </Link>
      <div className="hidden lg:flex items-center gap-[30px]">
        <Link
          className="text-white text-[16px] font-semibold hover:text-[#A259FF] duration-400"
          href={"/marketplace"}
        >
          {t("marketplace")}
        </Link>
        <Link
          className="text-white text-[16px] font-semibold hover:text-[#A259FF] duration-400"
          href={"/rankings"}
        >
          {t("rankings")}
        </Link>
        <Link
          className="text-white text-[16px] font-semibold hover:text-[#A259FF] duration-400"
          href={"/connect-wallet"}
        >
          {t("connectWallet")}
        </Link>
        <Button iconPosition="left" icon={<SignUpIcon />}>
          {t("signUp")}
        </Button>
      </div>
      <button className="cursor-pointer lg:hidden ">
        <HamburgerMenu />
      </button>
    </header>
  );
};

export default Header;
