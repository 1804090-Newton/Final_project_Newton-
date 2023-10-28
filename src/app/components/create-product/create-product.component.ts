import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { serverlessAPI } from '../../../environments/env';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  message: number = 0
  form: FormGroup;
  categories: string[] = ['electronics', 'grocery', 'fashion', 'home', 'sports'];
  origin: string[] = ['Europe', 'china', 'Africa', 'USA', 'India'];
  best : boolean[] = [true, false];

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.message = 0;
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

  onSubmit() {
    if (this.form.valid) {
      let name = this.form.value.productName.toLowerCase()
      this.http.post(`${serverlessAPI}/products`, { ...this.form.value, productName: name }).subscribe(data => {
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
