import { AuctionResultType } from "@/@types/AuctionResultType";
import { AuctionsType } from "@/@types/AuctionsType";
import { UserType } from "@/@types/UserType";
import { Button, CustomImage, Heading, Text } from "@/components";
import { RocketIcon } from "@/icons";
import { useTranslations } from "next-intl";
import { FC } from "react";

const HeroContent: FC<{
  auctions: AuctionsType[];
  artists: UserType[];
  totalSale: AuctionResultType[];
}> = ({ auctions, artists, totalSale }) => {
  const t = useTranslations("heroContent");

  return (
    <section className="py-[80px]">
      <div className="containers flex flex-col gap-[40px] lg:gap-0 lg:flex-row items-center justify-between">
        <div className="w-full lg:w-[500px]">
          <Heading classList="!mb-[20px] !text-[28px] !leading-[110%]" tag="h1">
            {t("discover")}
          </Heading>
          <Text classList="!mb-[30px] !max-w-[370px] !capitalize">
            {t("nftMarketplace")}
          </Text>
          <div className="hidden lg:block">
            <Button icon={<RocketIcon />} iconPosition="left">
              {t("getStarted")}
            </Button>
            <div className="mt-[30px] flex gap-[30px]">
              <div>
                <strong className="text-white text-[28px] font-bold ">
                  {totalSale.length}+
                </strong>
                <Text classList="!text-[23px]">{t("totalSale")}</Text>
              </div>
              <div>
                <strong className="text-white text-[28px] font-bold ">
                  {auctions.length}+
                </strong>
                <Text classList="!text-[23px]">{t("auctions")}</Text>
              </div>
              <div>
                <strong className="text-white text-[28px] font-bold ">
                  {artists.length}+
                </strong>
                <Text classList="!text-[23px]">{t("artists")}</Text>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[510px]">
          <CustomImage src="/hero-img.png" alt="Hero img" W={510} H={401} />
          <div className="py-[22px] mb-[40px] lg:mb-0 px-[20px] bg-[#3B3B3B] rounded-br-[20px] rounded-bl-[20px]">
            <Heading tag="h3">{t("spaceWalking")}</Heading>
            <div className="flex items-center gap-[12px] mt-[10px]">
              <CustomImage
                src="/hero-avatar.svg"
                alt="Hero avatar"
                W={24}
                H={24}
              />
              <Text classList="!text-[16px]">Animakid</Text>
            </div>
          </div>
          <div className="lg:hidden">
            <Button
              classList="!w-full"
              icon={<RocketIcon />}
              iconPosition="left"
            >
              Get Started
            </Button>
            <div className="mt-[30px] flex justify-between">
              <div>
                <strong className="text-white text-[28px] font-bold ">
                  {totalSale.length}+
                </strong>
                <Text classList="!text-[23px]">{t("totalSale")}</Text>
              </div>
              <div>
                <strong className="text-white text-[28px] font-bold ">
                  {auctions.length}+
                </strong>
                <Text classList="!text-[23px]">{t("auctions")}</Text>
              </div>
              <div>
                <strong className="text-white text-[28px] font-bold ">
                  {artists.length}+
                </strong>
                <Text classList="!text-[23px]">{t("artists")}</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
