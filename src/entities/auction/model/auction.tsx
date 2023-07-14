import { Bet, bet } from "@/entities/bet/model/bet";

export type Auction = {
  maxBet: Bet;
  allBets: Array<Bet>;
  opening: Date;
  closing: Date;
};

export const auction: Auction = {
  maxBet: { userId: 23, bet: 15.43 },
  allBets: [{ ...bet }, { ...bet }, { ...bet }],
  opening: new Date(),
  closing: new Date(),
};
