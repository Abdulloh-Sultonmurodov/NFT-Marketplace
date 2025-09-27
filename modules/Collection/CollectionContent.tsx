import { CollectionType } from "@/@types/CollectionType";
import { Heading, Text } from "@/components";
import CollectionCard from "@/components/CollectionCard";
import { useTranslations } from "next-intl";
import { FC } from "react";

const CollectionContent: FC<{ collections: CollectionType[] }> = ({
  collections,
}) => {
  const t = useTranslations("collectionContent");

  return (
    <section className="py-[80px]">
      <div className="containers">
        <Heading classList="!mb-[10px] !text-[28px] sm:!text-[38px]" tag="h2">
          {t("trending")}
        </Heading>
        <Text classList="!text-[16px] lg:!text-[22px] !mb-[40px] lg:!mb-[60px]">
          {t("checkout")}
        </Text>
        <div className="flex justify-center gap-[30px] lg:gap-0 lg:justify-between !flex-wrap">
          {collections.map((item) => (
            <CollectionCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionContent;
