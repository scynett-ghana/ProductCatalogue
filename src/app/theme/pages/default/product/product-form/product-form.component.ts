import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../../../../_services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  productValue: any;

  constructor(private product: ProductService, private formBuilder: FormBuilder, private route: ActivatedRoute) { }

  submit() {
    const value = this.productForm.value;
    console.log(value);

    if (this.productValue.id === undefined) {
      this.product.save(this.productForm.value).subscribe((data: any) => {
        this.product = data;
        this.createProductForm();
      })
    }
    else {
      this.product.update(this.productValue.id, this.productForm.value).subscribe((data: any) => {
        this.productValue = data;
        this.createProductForm();
      })
    }


  }
  ngOnInit() {
    this.createProductForm();
    const id = this.route.snapshot.params["id"];

    if (id === undefined) {
      return;
    }

    this.product.getOne(id)
      .subscribe((data) => {
        this.productValue = data;
        this.fillProductForm(this.productValue)
        console.log(this.productValue)
      });
  }
  createProductForm() {
    this.productForm = this.formBuilder.group({
      id: [''],
      productName: ['', Validators.required],
      productId: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required],
      description: ['']
    });
  }

  fillProductForm(product: any) {
    this.productForm = this.formBuilder.group({
      id: [product.id],
      productName: [product.productName, Validators.required],
      productId: [product.productId, Validators.required],
      category: [product.category, Validators.required],
      price: [product.price, Validators.required],
      description: [product.description]
    });
  }




}
