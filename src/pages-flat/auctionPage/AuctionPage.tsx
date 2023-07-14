import { product } from "@/entities/product/model/product";
import Header from "@/shared/header/ui/Header";
import Layout from "@/shared/layout/ui/Layout";
import ProductCard from "@/widgets/ProductCard/ui/ProductCard";

const productElem = { ...product };

const AuctionPage = () => {
  return (
    <Layout renderHeader={Header}>
      <ProductCard product={productElem} />
      HERE WILL BE AUCTION
    </Layout>
  );
};

export default AuctionPage;
