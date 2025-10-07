import React from "react";
import CollectionContent from "./CollectionContent";
import { getRequest } from "@/server/getRequest";

const Collection = async () => {
  const collections = await getRequest("/collections");

  return <CollectionContent collections={collections.data} />;
};

export default Collection;
