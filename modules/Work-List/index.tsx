import { CustomImage, Heading, Text } from "@/components";
import React from "react";

const WorkList = () => {
  return (
    <section className="py-[80px]">
      <div className="containers">
        <div className="pb-[48px]">
          <Heading tag="h2">How it Works</Heading>
          <Text>Find out how to get started</Text>
        </div>
        <div className="flex gap-[30px]">
          <div className="w-[330px] flex flex-col items-center gap-[20px] bg-[#3B3B3B] rounded-[20px] pb-[30px] px-[30px]">
            <CustomImage
              src="/setup-img.svg"
              alt="Setup Image"
              W={250}
              H={250}
            />
            <div className="text-center">
              <Heading classList="!pb-[10px]" tag="h3">
                Setup Your wallet
              </Heading>
              <Text>
                Set up your wallet of choice. Connect it to the Animarket by
                clicking the wallet icon in the top right corner.
              </Text>
            </div>
          </div>
          <div className="w-[330px] flex flex-col items-center gap-[20px] bg-[#3B3B3B] rounded-[20px] pb-[30px] px-[30px]">
            <CustomImage
              src="/create-img.svg"
              alt="Create Image"
              W={250}
              H={250}
            />
            <div className="text-center">
              <Heading classList="!pb-[10px]" tag="h3">
                Create Collection
              </Heading>
              <Text>
                Upload your work and setup your collection. Add a description,
                social links and floor price.
              </Text>
            </div>
          </div>
          <div className="w-[330px] flex flex-col items-center gap-[20px] bg-[#3B3B3B] rounded-[20px] pb-[30px] px-[30px]">
            <CustomImage
              src="/start-img.svg"
              alt="Start Image"
              W={250}
              H={250}
            />
            <div className="text-center">
              <Heading classList="!pb-[10px]" tag="h3">
                Start Earning
              </Heading>
              <Text>
                Choose between auctions and fixed-price listings. Start earning
                by selling your NFTs or trading others.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkList;
