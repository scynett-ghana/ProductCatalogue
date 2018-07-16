import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from '../default.component';
import { LayoutModule } from '../../../layouts/layout.module';

import {HttpClientModule} from "@angular/common/http";
import {ProductService} from "../../../../_services/product.service";

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: 'list',
        component: ProductListComponent
      },
      {
        path: 'add',
        component: ProductFormComponent
      },
      {
        path: 'edit/:id',
        component: ProductFormComponent
      },
      {
        path: 'detail/:id',
        component: ProductDetailComponent
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
      CommonModule,
      LayoutModule,
      HttpClientModule,
      RouterModule.forChild(routes),
  ],
    providers:[
        ProductService
    ],
  declarations: [
      ProductListComponent,
      ProductFormComponent,
      ProductDetailComponent
  ]
})
export class ProductModule { }
