import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  q: any;
  data: any;
  page: number = 0;
  perPage: number = 10;
  sort: string = ''

  constructor(private prod: ProductsService) { }

  sorting(sort) {
    this.sort = sort.target.value;
    this.ngOnInit();
  }

  paging(sort) {
    this.perPage = sort.target.value;
    this.ngOnInit();
  }

  delete (id: string) {
    this.prod.deleteProduct(id).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    });
  }

  deleteCondition(id: string) {
    this.q = this.prod.items.find(item => (item.product._id === id));
    console.log(this.q)
    if (this.q) {
      return true;
    }else {
      return false;
    }
  }
  
  inc(): void {
    this.page++;
    this.ngOnInit();
  }
  dec(): void {
    this.page>0&&this.page--;
    this.ngOnInit();
  }
  ngOnInit() {
    this.prod.getProducts(this.page, this.perPage, this.sort).subscribe(data => {
      this.data = data;
    });
  }
}
