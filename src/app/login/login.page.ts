import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public nav: NavController, private menu: MenuController) { 
    this.menu.enable(false);
  }

  goToGallery(){
    this.nav.navigateForward('/gallery')
  }

  ngOnInit() {
  }

}
