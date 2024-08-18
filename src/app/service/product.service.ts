import { computed, Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  products: Product[] = [
    {
      id: 1,
      name: "Apple Iphone 15",
      description: "The Apple iPhone 15 is a smartphone that was designed, manufactured, and sold by Apple Inc. It is the fifteenth generation of the iPhone. It was announced on September 14, 2023, alongside the iPhone 15 Mini, iPhone 15 Pro, and iPhone 15 Pro Max at the Steve Jobs Theater in Apple Park, Cupertino by Apple CEO Tim Cook.",
      price: 999,
      ogPrice: 1099,
      image: "iphone15.png",
      currency: "$",
      avlQuantity: 20,
      selectedQuantity: 1,
      quantityError: false,
    },
    {
      id: 2,
      name: "Samsung Galaxy S24",
      description: "The Samsung Galaxy S30 is a smartphone that was designed, manufactured, and sold by Samsung Inc. It is the thirtieth generation of the Galaxy S series. It was announced on January 14, 2023, alongside the Galaxy S30 Mini, Galaxy S30 Plus, and Galaxy S30 Ultra at the Samsung Galaxy Unpacked event in Seoul by Samsung CEO DJ Koh.",
      price: 899,
      ogPrice: 999,
      image: "s24ultra.jpg",
      currency: "$",
      avlQuantity: 10,
      selectedQuantity: 1,
      quantityError: false,
    },
    {
      id: 3,
      name: "Google Pixel 8",
      description: "The Google Pixel 8 is a smartphone that was designed, manufactured, and sold by Google Inc. It is the eighth generation of the Pixel series. It was announced on October 15, 2023, alongside the Pixel 8a, Pixel 8 Pro, and Pixel 8 XL at the Google Pixel event in Mountain View by Google CEO Sundar Pichai.",
      price: 799,
      ogPrice: 899,
      image: "pixel8.jpg",
      currency: "$",
      avlQuantity: 15,
      selectedQuantity: 1,
      quantityError: false,
    },
    {
      id: 4,
      name: "OnePlus 12",
      description: "The OnePlus 12 is a smartphone that was designed, manufactured, and sold by OnePlus Inc. It is the twelfth generation of the OnePlus series. It was announced on November 14, 2023, alongside the OnePlus 12 Mini, OnePlus 12 Pro, and OnePlus 12 Pro Max at the OnePlus event in Shenzhen by OnePlus CEO Pete Lau.",
      price: 699,
      ogPrice: 799,
      image: "oneplus12.jpg",
      currency: "$",
      avlQuantity: 25,
      selectedQuantity: 1,
      quantityError: false,
    },
    {
      id: 5,
      name: "Xiaomi Mi 12",
      description: "The Xiaomi Mi 12 is a smartphone that was designed, manufactured, and sold by Xiaomi Inc. It is the twelfth generation of the Mi series. It was announced on December 14, 2023, alongside the Mi 12 Lite, Mi 12 Pro, and Mi 12 Ultra at the Xiaomi event in Beijing by Xiaomi CEO Lei Jun.",
      price: 599,
      ogPrice: 699,
      image: "mi12.png",
      currency: "$",
      avlQuantity: 30,
      selectedQuantity: 1,
      quantityError: false,
    }
  ];

  private cartItems = new BehaviorSubject<Product[]>([]);
  cartItems$ = this.cartItems.asObservable();


  addToCart(product: Product) {
    let items = this.cartItems.getValue();
    items.unshift(product);
    this.cartItems.next(items);
  }

  removeFromCart(product: Product) {
    const currentItems = this.cartItems.getValue();
    const updatedItems = currentItems.filter((item) => item.id !== product.id);
    this.cartItems.next(updatedItems);
  }

  getCartItems() {
    return this.cartItems.getValue();
  }
}
