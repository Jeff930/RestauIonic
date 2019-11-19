import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { IntroPage} from '../pages/intro/intro';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = 'HomePage';
  checkApp: any;
  Date = new Date();
  currentSched;
  pages: Array<{title: string, component: any , icon : string}>;
  pagesDesk: Array<{ title: string, component: any, icon: string }>;

  public innerWidth: any;
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    this.checkApp = this.platform.is('android');
    this.innerWidth = window.innerWidth;
    if (this.innerWidth<=480) {
      this.checkApp = true;
    }
    console.log();
    this.pages = [
      { title: 'Home', component: 'HomePage', icon: 'basket' },
      { title: 'Menu', component: 'GalleryTabsPage', icon: 'book' },
      { title: 'About Us', component: 'AboutPage', icon: 'information-circle' },
      { title: 'Contact Us', component: 'ContactPage' , icon:'call'},
      { title: 'Catering and Events', component: 'CateringPage', icon: 'albums' }
      ];
      this.pagesDesk = [
        { title: 'HOME', component: 'HomePage', icon: 'home' },
        { title: 'MENU', component: 'GalleryTabsPage', icon: 'images' },
        { title: 'ABOUT US', component: 'AboutPage', icon: 'information-circle' },
        { title: 'EVENTS', component: 'CateringPage', icon: 'basket' }, 
        { title: 'CONTACT', component: 'ContactPage', icon: 'information-circle' }
      ]
      const currentDate = this.Date.getDate();
      if (currentDate !== 0 ) {
        console.log(currentDate);
        this.currentSched = '10:00am - 10:00pm';
      } else {
        this.currentSched = '10:00am - 08:00pm';
      }
    }

    initializeApp() {
      this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    }

    openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    }

  goTo() {
    this.nav.setRoot('HomePage');
    }
}
