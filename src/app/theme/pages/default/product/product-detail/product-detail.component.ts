import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../../../_services/product.service';

 

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  
  
  product: any;
  constructor (private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit():  void { 
    const id = this.route.snapshot.params["id"];

    this.productService.getOne(id)
    .subscribe((data) => { 
      this.product = data;
      console.log(this.product) 
    });
  
  }

}
