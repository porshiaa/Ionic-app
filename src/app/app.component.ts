import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public nav: NavController
  ) {
    this.menuNav();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  menuNav()
  {
    this.navigate =
    [
      {
        title : "Login",
        url   : "/login",
        icon  : "log-in"
      },
      {
        title : "Dashboard",
        url   : "/gallery",
        icon  : "today"
      },
      {
        title : "Photos",
        url   : "#",
        icon  : "images"
      },
      {
        title: "Chat",
        url : "#",
        icon: "chatboxes"
      }
    ]
  }
}
