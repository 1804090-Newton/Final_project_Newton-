import { Component } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart = [];
  total: number = 0;
  constructor(private prod: ProductsService) { }
  ngOnInit() {
    this.total = this.prod.getTotalPrice();
    this.cart = this.prod.items;
    console.log(this.cart, this.total);
  }
  inc(item) {
    item.quantity++;
    item.totalPrice = item.product.price * item.quantity;
    this.total = this.prod.getTotalPrice();
  }
  dec(item) {
    if(item.quantity === 1) return;
    item.quantity--;
    item.totalPrice = item.product.price * item.quantity;
    this.total = this.prod.getTotalPrice();
  }
}
