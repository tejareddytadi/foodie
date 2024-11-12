// cart.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = [];

  // Method to add items to the cart
  addToCart(item: any) {
    this.cartItems.push(item);
    console.log('Item added to cart:', item);
  }

  // Method to get all items from the cart
  getCartItems() {
    return this.cartItems;
  }

  // Method to clear the cart
  clearCart() {
    this.cartItems = [];
    return this.cartItems;
  }
}
