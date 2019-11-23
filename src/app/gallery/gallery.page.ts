import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Router, NavigationExtras } from '@angular/router';



@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  pokedex: any[]=[];
  pokemon: ""

  // users: any[]=[];

  constructor(public http: HttpClient, private menu: MenuController, public nav: NavController,
    private router: Router) {
    
    // this.http.get("https://randomuser.me/api/?results=20").subscribe(data=>{
    //   this.users = data["results"]
      // console.log(this.users) 
      // })

    this.http.get("https://api.pokemontcg.io/v1/cards").subscribe(data=>{
      this.pokedex = data['cards'];

    });

}

ionViewWillEnter(){
  this.menu.enable(true);
}

ngOnInit() {
}

public openDetails(pokemon){
  let navigationExtras: NavigationExtras ={
  queryParams: {
    pokemon: JSON.stringify(pokemon),
    }
  }
  this.nav.navigateForward(['details'], navigationExtras);
  // console.log(pokemon)



}

   }








