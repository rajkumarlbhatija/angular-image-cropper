import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Image Cropper Module
import { ImageCropperModule } from 'ngx-image-cropper';
import { ImageRoutingModule } from './image-routing.module';
import { CropperComponent } from './cropper/cropper.component';
import { EllipsisDirective } from '../directives/ellipsis.directive';
import { EllipsizePipe } from '../pipes/ellipsize.pipe';


@NgModule({
  declarations: [
    CropperComponent,
    EllipsisDirective,
    EllipsizePipe
  ],
  imports: [
    CommonModule,
    ImageRoutingModule,
    ImageCropperModule
  ]
})
export class ImageModule { }
