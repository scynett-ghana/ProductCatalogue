import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../../../../_services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '../../../../../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { ImageUploadComponent } from '../../shared/imageupload/imageupload.component';




@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  productValue: any;
  productImageUpload: any;


  constructor(private product: ProductService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private modalService: NgbModal
  ) { }

  submit() {

    if (this.productImageUpload) {
      this.productForm.value.image = this.productImageUpload;
    }

    if (!this.productValue) {
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

  uploadImage(productImage) {
    this.productImageUpload = productImage;
  }

  openImgUpload() {
    const modalRef = this.modalService.open(ImageUploadComponent, { size: 'lg' });
    modalRef.componentInstance.productImage.subscribe((result: any) => {
      this.productImageUpload = result
      console.log(this.productImageUpload);
    })
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
