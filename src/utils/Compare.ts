import { ICard } from "../types/Card";

export const highestListCompare = (a: ICard, b: ICard) => {
  const aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
  const bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));

  return bPrice - aPrice;
};

export const lowestListCompare = (a: ICard, b: ICard) => {
  const aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
  const bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));

  return aPrice - bPrice;
};
