import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from '../default.component';
import { LayoutModule } from '../../../layouts/layout.module';

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
    RouterModule.forChild(routes),
  ],
  declarations: [
    ProductListComponent,
    ProductFormComponent,
    ProductDetailComponent
  ]
})
export class ProductModule { }
