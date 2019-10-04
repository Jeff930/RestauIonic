// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { drinks } from '../../models/drink';
/*
  Generated class for the ProviderImagesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProviderImagesProvider {
  public templateImage = [];
  public currentImage: any;
  constructor() {
    console.log('Hello ProviderImagesProvider Provider');
  }
  
  getImages() {
    this.templateImage = drinks;
    return this.templateImage;
  }

}
