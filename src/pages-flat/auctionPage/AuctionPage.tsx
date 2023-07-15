import { auction } from "@/entities/auction/model/auction";
import Header from "@/shared/header/Header";
import Layout from "@/shared/layout/Layout";
import AuctionCard from "@/widgets/AuctionCard/ui/AuctionCard";

const auctionElem = { ...auction };

const AuctionPage = () => {
  return (
    <Layout headerComponent={Header}>
      <AuctionCard auction={auctionElem} />
    </Layout>
  );
};

export default AuctionPage;
