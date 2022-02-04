export interface ICard {
  description: string;
  id: number;
  imageUrl: string;
  price: string;
  title: string;
}

export interface ICardItem {
  item: ICard;
}
