import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../../_services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  itemsPerPage: number;
  totalItems: any;
  previousPage: any;
  totalProducts: any;
  pageSize: 12;
  pageitems: number;
  currentPage: number;
  totalPages: number;
  query: any = '';
  cat: any = '';
  categories: Array<any>;

  constructor(private product: ProductService) { }

  getProductList(pageSize: number, currentPage: number) {
    this.product.getAll().subscribe((data: any) => {
      this.totalProducts = data;

      this.categories = this.totalProducts.map(p => p.category)
        .filter((v, i, s) => s.indexOf(v) === i).sort();
      this.itemsPerPage = data.length;
      this.totalProducts
      console.log(this.totalProducts);
    });
  }

  loadPage(event) {
    if (event > 1) {
      return this.totalProducts.slice((this.currentPage - 1) * 12, this.currentPage);
    }
    this.getProductList(this.pageSize, this.currentPage);
    console.log(event);
  }

  ngOnInit() {
    this.loadPage(event)
  }

}
