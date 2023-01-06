export interface BasketItemModel {
  productId: string;
  name: string;
  price: number;
  pictureUrl: string;
  brand: string;
  type: string;
  quantity: number;
}

export interface BasketModel {
  id: string;
  buyerId: string;
  items: BasketItemModel[];
}
