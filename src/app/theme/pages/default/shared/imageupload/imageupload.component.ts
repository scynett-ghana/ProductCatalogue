import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-imageupload',
  templateUrl: './imageupload.component.html',
  styleUrls: ['./imageupload.component.scss']
})

export class ImageUploadComponent implements OnInit {

  @Output() productImage = new EventEmitter();

  constructor(public activeModal: NgbActiveModal) { }

  imageChangedEvent: any = '';
  croppedImage: any = '';
  cropperReady = false;

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(image: string) {
    this.croppedImage = image;
  }
  imageLoaded() {
    this.cropperReady = true;
    // show cropper
  }
  loadImageFailed() {
    // show message
  }

  onSubmit() {
    this.productImage.emit(this.croppedImage);
    this.activeModal.close();
  }

  ngOnInit() {
  }

}
