"use client";

import { FC } from "react";
import style from "./AuctionCard.module.css";
import PlaceBetButton from "@/features/placeBet/ui/PlaceBetButton";
import { fetchPlaceBet } from "@/features/placeBet/api/fetchPlaceBet";
import { Auction } from "@/entities/auction/model/auction";
import Link from "next/link";

type Props = {
  auction: Auction;
};

const AuctionCard: FC<Props> = ({ auction }) => {
  return (
    <div className={style.auctionCardWrapper}>
      Here will be auction
      <div className={style.auctionCardProductWrapper}>
        <h2>Product</h2>
        <Link className={style.auctionCardProductIdHref} href="/catalog">
          {"№" + auction.productId}
        </Link>
      </div>
      <PlaceBetButton onClick={fetchPlaceBet} />
    </div>
  );
};

export default AuctionCard;
