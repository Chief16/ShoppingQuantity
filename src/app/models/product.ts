export interface Product {
  id: number;
  name: string;
  price: number;
  ogPrice: number;
  description: string;
  image: string;
  currency: string;
  avlQuantity: number;
  selectedQuantity: number;
  quantityError: boolean;
}