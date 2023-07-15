import { auction } from "@/entities/auction/model/auction";
import Header from "@/shared/header/Header";
import Layout from "@/shared/layout/Layout";
import Subheader from "@/shared/subheader/Subheader";
import AuctionCard from "@/widgets/AuctionCard/ui/AuctionCard";
import CardsList from "@/widgets/CardsList/ui/CardsList";
import Link from "next/link";
import { useMemo } from "react";

const auctionList = [{ ...auction }, { ...auction }, { ...auction }];

const navLinksArray = [
  { title: "Catalog", route: "/catalog" },
  { title: "Auctions", route: "/auctions" },
];

const subheaderComponent = () => <Subheader navLinksArray={navLinksArray} />;

const headerComponent = () => <Header renderSubheader={subheaderComponent} />;

const AuctionsPage = () => {
  const auctionCardsList = useMemo(
    () =>
      auctionList.map((auction, index) => {
        return <AuctionCard auction={auction} key={index} />;
      }),
    [auctionList]
  );

  return (
    <Layout headerComponent={headerComponent}>
      <CardsList cardsList={auctionCardsList} />
    </Layout>
  );
};

export default AuctionsPage;
