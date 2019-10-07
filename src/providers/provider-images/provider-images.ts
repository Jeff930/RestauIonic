// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { drinks } from '../../models/drink';
import { food } from '../../models/food';
import { outside } from '../../models/outside';
import { inside } from '../../models/inside';
/*
  Generated class for the ProviderImagesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProviderImagesProvider {
  public templateImage = [];
  public imageReturnLimitedView = [];
  public currentImage: any;
  constructor() {
    console.log('Hello ProviderImagesProvider Provider');
  }
  
  getImages(type) {
    if (type === "drinks") {
      this.templateImage = drinks;
    } else if ( type === "outside") {
      this.templateImage = outside;
    } else if (type === "inside") {
      this.templateImage = inside;
    } else if (type === "food") {
      this.templateImage = food;
    } else {
      const allFoods = [];
      drinks.forEach(element => {
        allFoods.push(element);
      });
      outside.forEach(element => {
        allFoods.push(element);
      });
      inside.forEach(element => {
        allFoods.push(element);
      });
      food.forEach(element => {
        allFoods.push(element);
      });
      this.templateImage = allFoods;
    }
    return this.templateImage;
  }
  getEachImageForView() {
    const allFoods = [];
    drinks.forEach(element => {
      if (element.name === 'sample Drink 1') {
        allFoods.push(element);
      }
    });
    outside.forEach(element => {
      if (element.name === 'sample Outside 1') {
        allFoods.push(element);
      }
    });
    inside.forEach(element => {
      if (element.name === 'sample Inside 1') {
        allFoods.push(element);
      }
    });
    food.forEach(element => {
      if (element.name === 'sample Food 1') {
        allFoods.push(element);
      }
    });
    this.imageReturnLimitedView = allFoods;
    return this.imageReturnLimitedView;
  }
}
