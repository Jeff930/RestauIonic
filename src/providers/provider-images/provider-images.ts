// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { drinks } from '../../models/drink';
import { food } from '../../models/food';
import { outside } from '../../models/outside';
import { inside } from '../../models/inside';
import { menu } from '../../models/menu';

import { appetizers } from '../../models/appetizer';
import { beefs } from '../../models/beef';
import { vegetables } from '../../models/vegetable';
import { chickens } from '../../models/chicken';
import { porks } from '../../models/pork';
import { seafoods } from '../../models/seafood';
import { Platform } from 'ionic-angular';

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
  public menuItems = [];
  public checkApp;
  innerWidth: number;
  constructor(public platform: Platform) {
    console.log('Hello ProviderImagesProvider Provider');
  }
  
  //TODO: Update this when the app is ready for IOS, currently this is for android only 
  checkAppPlatform() {
    this.checkApp = this.platform.is('android');
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 480) {
      this.checkApp = true;
    }
    return this.checkApp;
  }

  //TODO: Update this when Client gives the spreadsheet for the menu
  getImages(type) {
    if (type === "drinks") {
      this.templateImage = drinks;
    } else if ( type === "outside") {
      this.templateImage = outside;
    } else if (type === "inside") {
      this.templateImage = inside;
    } else if (type === "menu") {
      this.templateImage = menu;
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
    beefs.forEach(element => {
      if (element.name === 'Beef Mechado (Stew in Tomato Sauce)') {
        allFoods.push(element); 
      }   
    });
    menu.forEach(element => {
      if (element.name === 'sample Menu 2') {
        allFoods.push(element);
      }
    });
    this.imageReturnLimitedView = allFoods;
    return this.imageReturnLimitedView;
  }


  // get all the items from the other foods.
  
  getAllFoodsFromMenu() {
    const allMenu = [];
    appetizers.forEach(element => {
        allMenu.push(element);
    });
    beefs.forEach(element => {
        allMenu.push(element);
    });
    vegetables.forEach(element => {
        allMenu.push(element);
    }); 
    chickens.forEach(element => {
      allMenu.push(element);
    }); 
    porks.forEach(element => {
      allMenu.push(element);
    }); 
    seafoods.forEach(element => {
      allMenu.push(element);
    }); 
    this.menuItems = allMenu;
    return this.menuItems;
  }
}
