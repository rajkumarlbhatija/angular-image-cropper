import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-cropper',
  templateUrl: './cropper.component.html',
  styleUrls: ['./cropper.component.scss']
})
export class CropperComponent implements OnInit {

  title = 'image-drop-and-crop';
  imageChangedEvent: any = '';
  croppedImage: any = '';
  saved:boolean=true;
  upload_name = "Browse or Drag and Drop the image in .jpg, .png, .gif etc";
  isFileSelected = false;
  droppedImage:any = '';
  download_name:string='cropped_'

  constructor(private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
   }

  ngOnInit(): void {
  }

  /**
  * Function to Upload and Show Image and trigger cropping
  * @param event
  */
   fileChangeEvent(event: any): void {
    const file_type = event.target.files[0].type.substring(0, 5);
    if(file_type=='image')
    {
    this.upload_name = event.target.files[0].name;
    const ext = "."+this.upload_name.split('.').pop();
    this.download_name += this.upload_name.replace(ext,'');
    this.imageChangedEvent = event;
    this.isFileSelected = true;
    }
  }

  /**
  * Function to crop an image 
  * @param event : ImageCroppedEvent
  */
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  /**
  * Function to allow drop image
  * @param event
  */
  allowDrop(event: any) {
    event.preventDefault();
  }
  
  /**
  * Function to preview the cropped image alone
  */
  save()
  {
    this.saved=false;
  }

  back()
  {
    this.router.navigateByUrl('/image/cropper');

  }

}
