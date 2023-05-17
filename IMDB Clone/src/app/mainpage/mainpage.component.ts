import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
})
export class MainpageComponent implements OnInit {
  productdetails: any;
  myArray: any;
  searchTerm: any;
  loader = true;
  constructor(private service: ServiceService) {}
  handlegettrendingmovies(data) {
    this.productdetails = data;
  }
  ngOnInit() {
    this.service.getmovie().subscribe((data) => {
      this.productdetails = data;
      setTimeout(() => {
        this.loader = false;
      }, 1000);
    });
  }
}
