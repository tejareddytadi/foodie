import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  menuItems = [
    {
      name: 'Bell Burrito Supreme',
      category: 'Burrito',
      price: 59,
      originalPrice: 69,
      imageUrl: 'assets/food-menu-3.png',
    },
    {
      name: 'Kung Pao Chicken BBQ',
      category: 'Nuggets',
      price: 49,
      originalPrice: 69,
      imageUrl: 'assets/food-menu-1.png',
    },
    {
      name: 'Wendy\'s Chicken',
      category: 'Chicken',
      price: 49,
      originalPrice: 69,
      imageUrl: 'assets/food-menu-2.png',
    },
  ];

  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    console.log('Menu Items:', this.menuItems);
  }
  



  addToCart(item: any) {
    this.cartService.addToCart(item);
    alert(`${item.name} added to cart!`);
  }
}
