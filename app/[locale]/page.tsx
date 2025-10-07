import {
  Collection,
  Creators,
  Hero,
  Auctions,
  NFT,
  WorkList,
  DigestInput,
} from "@/modules";
import Categories from "@/modules/Categories";

export default function Home() {
  return (
    <main>
      <Hero />
      <Collection />
      <Creators />
      <Categories />
      <NFT />
      <Auctions />
      <WorkList />
      <DigestInput />
    </main>
  );
}
