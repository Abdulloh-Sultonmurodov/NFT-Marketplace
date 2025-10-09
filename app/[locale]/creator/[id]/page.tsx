import { getRequest } from "@/server/getRequest";
import { FC } from "react";

const SingleCreator: FC<{ params: { id: string } }> = async ({ params }) => {
  const { id } = params;
  const singleData = await getRequest(`/user/${id}`);

  return <div>single creator</div>;
};

export default SingleCreator;
