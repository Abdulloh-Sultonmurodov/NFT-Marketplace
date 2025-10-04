import { Collection, Creators, Hero, Auctions, NFT } from "@/modules";
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
    </main>
  );
}
