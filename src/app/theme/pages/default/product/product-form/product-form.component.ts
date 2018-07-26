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

  constructor(private product: ProductService, private formBuilder: FormBuilder) { }

  submit() {
    const value = this.productForm.value;
    console.log(value);

    this.product.save(this.productForm.value).subscribe((data: any) => {
      this.product = data;
      this.createProductForm();
    })
  }
  ngOnInit() {
    this.createProductForm();

  }
  createProductForm() {
    this.productForm = this.formBuilder.group({
      id: [''],
      productName: ['', Validators.required],
      productId: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required]

    });
  }


}
