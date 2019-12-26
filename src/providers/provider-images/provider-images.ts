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
import { platters } from '../../models/platter';
import { rices } from '../../models/rice';
import { soups } from '../../models/soup';
import { noodles } from '../../models/noodle';

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
  public currentImage;
  public menuItems = [];
  public checkApp;
  innerWidth: number;
  constructor(public platform: Platform) {
    console.log('Hello ProviderImagesProvider Provider');
  }
  
  //TODO: Update this when the app is ready for IOS, currently this is for android only 
  checkAppPlatform() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 480 || this.platform.is('android') || this.platform.is('cordova') || this.platform.is('iphone')) {
      this.checkApp = true;
    }
    console.log('this Device is a mobile ' + this.checkApp);
    return this.checkApp;
  }

  //TODO: Update this when Client gives the spreadsheet for the menu
  getImages(type) {
    if (type === "drinks") {
      this.templateImage = drinks;
    } else if ( type === "menu") {
      this.templateImage = menu;
    } else if (type === "appetizers") {
      this.templateImage = appetizers;
    } else if (type === "beefs") {
      this.templateImage = beefs;
    } else if (type === "vegetables") {
      this.templateImage = vegetables;
    }  else if (type === "chickens") {
      this.templateImage = chickens;
    }  else if (type === "porks") {
      this.templateImage = porks;
    }  else if (type === "seafoods") {
      this.templateImage = seafoods;
    }  else if (type === "platters") {
      this.templateImage = platters;
    }  else if (type === "rices") {
      this.templateImage = rices;
    }  else if (type === "soups") {
      this.templateImage = soups;
    }  else if (type === "noodles") {
      this.templateImage = noodles;
    } 



  //   else {
  //     const allFoods = [];
  //     drinks.forEach(element => {
  //       allFoods.push(element);
  //     });
  //     outside.forEach(element => {
  //       allFoods.push(element);
  //     });
  //     inside.forEach(element => {
  //       allFoods.push(element);
  //     });
  //     food.forEach(element => {
  //       allFoods.push(element);
  //     });
  //     this.templateImage = allFoods;
  //   }
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
