import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
import { IntroPage} from '../pages/intro/intro';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'IntroPage';
  checkApp: any;
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
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: 'NewsPage', icon: 'basket' },
      // {
      //   title: 'Gallery', component: 'GalleryTabsPage', icon: 'albums' },
      // { title: 'List', component: 'ListPage' },
      // { title: 'Portfolio', component: 'PortfolioPage' , icon:'image'},
      // { title: 'Login', component: 'LoginPage' , icon:'log-in'},
      // { title: 'Click', component: 'ClickPage' , icon:'camera'},
      // { title: 'Notifications', component: 'NotificationsPage' , icon:'notifications-outline'},
      // { title: 'Profile', component: 'ProfilePage' , icon:'contact'},
      // { title: 'Contact Us', component: 'SettingsPage' , icon:'call'},
      { title: 'About Us', component: 'NotificationsPage', icon: 'information-circle' },
      { title: 'Catering and Events', component: 'NotificationsPage', icon: 'albums' }
      ];
      this.pagesDesk = [
        { title: 'Home', component: 'NewsPage', icon: 'home' },
        { title: 'Gallery', component: 'GalleryTabsPage', icon: 'images' },
        { title: 'About Us', component: 'ProfilePage', icon: 'information-circle' },
        { title: 'Catering and Events', component: 'CateringPage', icon: 'basket' }
      ]
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
    this.nav.setRoot('NewsPage');
  }
}
