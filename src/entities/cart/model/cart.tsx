import { Product } from "@/shared/product/model/product";
import { product } from "@/shared/product/model/product";

type Cart = {
  userId: number;
  products: Array<Product>;
  totalCost: number;
};

const cart: Cart = {
  userId: 32,
  products: [{ ...product }, { ...product }, { ...product }],
  totalCost: 2343.34,
};
