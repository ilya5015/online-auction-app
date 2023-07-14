"use client";

import { FC, MouseEventHandler } from "react";

type Props = {
  onClick: MouseEventHandler;
};

const PlaceBetButton: FC<Props> = ({ onClick }) => {
  return <button onClick={onClick}>Place bet</button>;
};

export default PlaceBetButton;
