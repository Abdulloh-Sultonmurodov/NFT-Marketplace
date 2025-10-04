import { CreatorType } from "@/@types/CreatorType";
import { Button, Heading, Text } from "@/components";
import CreatorCard from "@/components/CreatorCard";
import { RocketIcon } from "@/icons";
import { useTranslations } from "next-intl";
import React, { FC } from "react";

const CreatorContent: FC<{ creators: CreatorType[] }> = ({ creators }) => {
  const t = useTranslations("creatorContent");

  return (
    <section className="py-[80px]">
      <div className="containers">
        <div className="flex items-center justify-between mb-[60px]">
          <div>
            <Heading tag="h2">{t("topCreators")}</Heading>
            <Text>{t("checkoutTop")}</Text>
          </div>
          <Button icon={<RocketIcon />} iconPosition="left">
            {t("viewRankings")}
          </Button>
        </div>
        <div className="flex justify-between flex-wrap gap-[30px]">
          {creators.map((item, index) => (
            <CreatorCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default CreatorContent;
