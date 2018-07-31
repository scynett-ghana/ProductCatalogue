import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUploadComponent } from './imageupload/imageupload.component';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    ImageCropperModule
  ],
  entryComponents: [ImageUploadComponent],
  declarations: [ImageUploadComponent]
})
export class SharedModule { }
