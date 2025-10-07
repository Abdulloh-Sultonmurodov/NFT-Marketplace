import { getRequest } from "@/server/getRequest";
import CreatorContent from "./CreatorContent";

const Creators = async () => {
  const creators = await getRequest("/user");

  return <CreatorContent creators={creators.data} />;
};

export default Creators;
