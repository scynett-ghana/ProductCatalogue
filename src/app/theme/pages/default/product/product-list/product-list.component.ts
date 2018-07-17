import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../../_services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  list: any;
  page = 2;
  totalProducts: any;
  constructor(private product: ProductService) { }

  showproduct() {
    this.product.getAll().subscribe((list: any) => {
      this.list = list;
      this.totalProducts = this.list.length;

      console.log(list);
      console.log(this.totalProducts);
    });
  }
  ngOnInit() {
    this.showproduct();
  }

}
