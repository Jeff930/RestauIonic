// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProviderImagesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProviderImagesProvider {
  public templateImage = [ 
    { name: 'test',
     image: 'img1.jpg'
    }, {
      name: 'test',
      image: 'img2.jpg'
    }, {
      name: 'test',
      image: 'img3.jpg'
    }, {
      name: 'test',
      image: 'img4.jpg'
    }, {
      name: 'test',
      image: 'img5.jpg'
    }
  ]
  constructor() {
    console.log('Hello ProviderImagesProvider Provider');
  }
  
  getImages() {
    return this.templateImage;
  }

}
