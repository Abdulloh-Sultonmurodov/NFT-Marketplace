import { MessageIcon } from "@/icons";
import Button from "./Button";
import { useTranslations } from "next-intl";

const SendEmail = ({ showIcon }: { showIcon: boolean }) => {
  const t = useTranslations("footerContent");

  return (
    <form
      autoComplete="off"
      className="w-full space-y-[16px] sm:space-y-0 relative"
    >
      <input
        name="email"
        type="email"
        required
        className="w-full py-[12px] sm:py-[19px] pr-[5px] sm:pr-[190px] pl-[20px] bg-white outline-none rounded-[20px]"
        placeholder={t("emailPlaceholder")}
      />
      <Button
        iconPosition="left"
        icon={showIcon && <MessageIcon />}
        classList="!w-full sm:!w-auto sm:!absolute right-0 top-0 bottom-0 !px-[50px] !py-[19px]"
      >
        {t("subscribe")}
      </Button>
    </form>
  );
};

export default SendEmail;
