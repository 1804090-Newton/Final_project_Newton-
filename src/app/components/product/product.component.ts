import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductsService } from '../../shared/services/products.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  q: number = 1;
  product: any;

    constructor(private route: ActivatedRoute,private router: Router, private prod: ProductsService) { }

    ngOnInit() {
      this.getProduct();
    }
  
    inc() {
      this.q++;
    }

    dec() {
      this.q>0&&this.q--;
    }
  
    addToCart(product, q: number) {
      !this.prod.items.find(item => item.product._id === product._id) && this.prod.addToCart(product, q);
    }

    getProduct() {
      const id = this.route.snapshot.paramMap.get('id');
      this.prod.getProduct(id).subscribe(data => {
        this.product = data;
      });
    }
}