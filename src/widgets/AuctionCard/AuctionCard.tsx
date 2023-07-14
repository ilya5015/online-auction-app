"use client";

import { FC } from "react";
import style from "./AuctionCard.module.css";
import PlaceBetButton from "@/features/placeBet/ui/PlaceBetButton";
import { fetchPlaceBet } from "@/features/placeBet/api/fetchPlaceBet";

type Props = {};

const AuctionCard: FC<Props> = () => {
  return (
    <div className={style.auctionCardWrapper}>
      Here will be auction
      <PlaceBetButton onClick={fetchPlaceBet} />
    </div>
  );
};

export default AuctionCard;
