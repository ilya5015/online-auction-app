import { Bet, bet } from "@/shared/bet/model/bet";

type Auction = {
  maxBet: Bet;
  allBets: Array<Bet>;
  opening: Date;
  closing: Date;
};

const auction: Auction = {
  maxBet: { userId: 23, bet: 15.43 },
  allBets: [{ ...bet }, { ...bet }, { ...bet }],
  opening: new Date(),
  closing: new Date(),
};
