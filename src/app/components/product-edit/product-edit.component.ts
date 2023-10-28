import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { serverlessAPI } from '../../../environments/env';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../shared/services/products.service';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  product: any;
  message: number = 0
  form: FormGroup;
  categories: string[] = ['electronics', 'grocery', 'fashion', 'home', 'sports'];
  origin: string[] = ['Europe', 'china', 'Africa', 'USA', 'India'];
  best : boolean[] = [true, false];

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private http: HttpClient, private prod: ProductsService) {}

  ngOnInit() {
    this.message = 0;
    this.getProduct();
    this.form = this.formBuilder.group({
      productName: ['', Validators.required],
      productShortCode: ['', [Validators.required]],
      description: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required],
      imageURL: ['', Validators.required],
      isBest: [''],
      origin: ['', Validators.required]
    });
  }

  getProduct() {
      const id = this.route.snapshot.paramMap.get('id');
      this.prod.getProduct(id).subscribe(data => {
        this.product = data;
      });
    }

  onSubmit(id: string) {
    if (this.form.valid) {
      this.prod.updateProduct(id, this.form.value).subscribe(data => {
        console.log(data);
      });
      this.form = this.formBuilder.group({
      productName: ['', Validators.required],
      productShortCode: ['', [Validators.required]],
      description: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required],
      imageURL: ['', Validators.required],
      isBest: [''],
      origin: ['', Validators.required]
    });
      console.log(this.form.value);
       this.message = 1;
    }
  }
}
