import { CustomImage, Heading, SendEmail, Text } from "@/components";
import React from "react";

const DigestInput = () => {
  return (
    <section className="pt-[40px] pb-[80px]">
      <div className="containers">
        <div className="flex gap-[80px] bg-[#3B3B3B] p-[60px] rounded-[20px]">
          <div>
            <CustomImage
              src="/astronaft.png"
              alt="Astronaft img"
              W={425}
              H={310}
            />
          </div>
          <div className="w-[425px] space-y-[10px]">
            <Heading tag="h2">
              Join our weekly
              <br /> digest
            </Heading>
            <Text classList="!text-[22px] !text-#FFFFFF">
              Get exclusive promotions & updates straight to your inbox.
            </Text>
            <div className="mt-[40px]">
              <SendEmail showIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigestInput;
