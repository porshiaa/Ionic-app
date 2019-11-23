import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  pokemon: any;
  passedID=null;
  sub: any;


  constructor(private route: ActivatedRoute, private router: Router) {
  this.route.queryParams.subscribe(params => {
      this.pokemon = JSON.parse(params['pokemon'])
      console.log(this.pokemon)


  })

}

  ngOnInit() {
  }

}
