import { auction } from "@/entities/auction/model/auction";
import Header from "@/shared/header/Header";
import Layout from "@/shared/layout/Layout";
import AuctionCard from "@/widgets/AuctionCard/ui/AuctionCard";
import CardsList from "@/widgets/CardsList/ui/CardsList";
import { useMemo } from "react";

const auctionList = [{ ...auction }, { ...auction }, { ...auction }];

const AuctionsPage = () => {
  const auctionCardsList = useMemo(
    () =>
      auctionList.map((auction, index) => {
        return <AuctionCard auction={auction} key={index} />;
      }),
    [auctionList]
  );

  return (
    <Layout headerComponent={Header}>
      <CardsList cardsList={auctionCardsList} />
    </Layout>
  );
};

export default AuctionsPage;
