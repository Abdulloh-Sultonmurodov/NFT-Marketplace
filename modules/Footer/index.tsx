import { CustomImage, Heading, SendEmail, Text } from "@/components";
import { DiscordIcon, InstagramIcon, TwitterIcon, YouTubeIcon } from "@/icons";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ReactNode } from "react";

const Footer = () => {
  const mediaList = [
    <DiscordIcon />,
    <YouTubeIcon />,
    <TwitterIcon />,
    <InstagramIcon />,
  ];
  const t = useTranslations("footerContent");

  return (
    <footer className="bg-[#3B3B3B] py-[40px]">
      <div className="containers">
        <div className="flex flex-col gap-[30px] lg:gap-0 lg:flex-row justify-between pb-[30px] border-b-[1px] border-[#858584] mb-[20px]">
          <div className="wmax-w-[243px]">
            <Link href="/">
              <CustomImage
                src="/site-logo.svg"
                alt="Site Logo"
                W={243}
                H={40}
              />
            </Link>
            <Text classList="!mb-[15px] mt-[30px]">{t("nftFigma")}</Text>
            <Text classList="!mb-[15px]">{t("join")}</Text>
            <div className="flex items-center gap-[10px] text-[#858584]">
              {mediaList.map((item: ReactNode, index: number) => (
                <Link
                  className="hover:scale-[1.2] duration-400"
                  key={index + 1}
                  href="/"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div className="max-w-[133px]">
            <Heading>{t("explore")}</Heading>
            <div className="flex flex-col gap-[20px] mt-[25px]">
              <Link href="/marketplace">
                <Text classList="hover:text-[#A259FF] duration-400">
                  {t("marketplace")}
                </Text>
              </Link>
              <Link href="/rankings">
                <Text classList="hover:text-[#A259FF] duration-400">
                  {t("rankings")}
                </Text>
              </Link>
              <Link href="/connect-wallet">
                <Text classList="hover:text-[#A259FF] duration-400">
                  {t("connectWallet")}
                </Text>
              </Link>
            </div>
          </div>
          <div className="w-full sm:w-[420px]">
            <Heading classList="!mb-[25px]">{t("joinOur")}</Heading>
            <Text classList="!mb-[20px] max-w-[320px]">
              {t("getExclusive")}
            </Text>
            <SendEmail showIcon={false} />
          </div>
        </div>
        <Text classList="!font-normal !text-[12px]">{t("nftMarket")}</Text>
      </div>
    </footer>
  );
};

export default Footer;
