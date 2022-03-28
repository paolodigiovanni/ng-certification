import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgNamePipe } from './pipes/img-name.pipe';



@NgModule({
  declarations: [
    ImgNamePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [ImgNamePipe]
})
export class SharedModule { }
