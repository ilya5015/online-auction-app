import { product } from "@/entities/product/model/product";
import Header from "@/shared/header/Header";
import Layout from "@/shared/layout/Layout";
import AuctionCard from "@/widgets/AuctionCard/AuctionCard";
import ProductCard from "@/widgets/ProductCard/ui/ProductCard";

const productElem = { ...product };

const AuctionPage = () => {
  return (
    <Layout renderHeader={Header}>
      <ProductCard product={productElem} />
      <AuctionCard />
    </Layout>
  );
};

export default AuctionPage;
