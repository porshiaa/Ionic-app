import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  users: any[]=[];

  constructor(public http: HttpClient) {
    
    this.http.get("https://randomuser.me/api/?results=20").subscribe(data=>{
      this.users = data["results"]
      console.log(this.users)
      
      })



}

ngOnInit() {
}

   }








