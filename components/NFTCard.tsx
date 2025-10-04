import { NTFType } from "@/@types/NftType";
import { FC } from "react";
import CustomImage from "./CustomImage";
import { API } from "@/hooks";
import Heading from "./Heading";
import Text from "./Text";

const NFTCard: FC<{ item: NTFType }> = ({ item }) => {
  return (
    <div className="w-[330px] ntf-wrapper cursor-pointer rounded-[20px] overflow-hidden">
      <div className="w-[330px] overflow-hidden h-[296px]">
        <CustomImage
          classList="!duration-300"
          src={`${API}/file/${item.image}`}
          alt="Nft Img"
          W={330}
          H={296}
        />
      </div>
      <div className="py-[20px] px-[30px] bg-[#3B3B3B]">
        <Heading classList="!mb-[5px]">{item.title}</Heading>
        <div className="flex items-center gap-[12px]">
          <CustomImage
            classList="!rounded-full"
            src={`${API}/file/${item.creator.image}`}
            alt="Creator Img"
            W={24}
            H={24}
          />
          <Text>{item.creator.username}</Text>
        </div>
        <div className="flex justify-between mt-[25px]">
          <div>
            <Text classList="!text-[#858584] !text-[15px]">Price</Text>
            <Text>{item.price}ETH</Text>
          </div>
          <div className="!text-end">
            <Text classList="!text-[#858584] !text-[15px]">Highest Bid</Text>
            <Text>0.33 wETH</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
