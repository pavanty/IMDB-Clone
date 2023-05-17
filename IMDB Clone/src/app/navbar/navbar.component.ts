import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServiceService } from './../service.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private service: ServiceService) {}
  productdetails: any;
  loader = true;
  @Output() eventclick = new EventEmitter();

  getpopular() {
    this.service.getmovie().subscribe((data) => {
      this.productdetails = data;
      this.eventclick.emit(this.productdetails);
    });
  }
  getlatest() {
    this.service.getlatest().subscribe((data) => {
      this.productdetails = data;
      this.eventclick.emit(this.productdetails);
    });
  }
  gettoprated() {
    this.service.gettoprated().subscribe((data) => {
      this.productdetails = data;
      this.eventclick.emit(this.productdetails);
    });
  }

  gettrending() {
    this.service.getnowplaying().subscribe((data) => {
      this.productdetails = data;
      this.eventclick.emit(this.productdetails);
    });
  }
  ngOnInit(): void {}
}
