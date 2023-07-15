"use client";

import { FC } from "react";
import style from "./AuctionCard.module.css";
import PlaceBetForm from "@/features/placeBet/ui/PlaceBetForm/PlaceBetForm";
import { fetchPlaceBet } from "@/features/placeBet/api/fetchPlaceBet";
import { Auction } from "@/entities/auction/model/auction";
import Link from "next/link";

type Props = {
  auction: Auction;
};

type HandleOnSubmitData = {
  betValue: number;
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
      <PlaceBetForm
        handleOnSubmit={(data: HandleOnSubmitData) => {
          const fetchData = { ...data, auctionId: auction.auctionId };
          fetchPlaceBet(fetchData);
        }}
      />
    </div>
  );
};

export default AuctionCard;
