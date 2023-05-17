import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movieid: number;
  moviedetails: any;
  loader = true;
  constructor(
    private service: ServiceService,
    private router: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.router.paramMap.subscribe((params: ParamMap) => {
      this.movieid = parseInt(params.get('id'));
      console.log(this.movieid);
    });
    this.getmoviedetails();
  }
  getmoviedetails() {
    this.service.getdetailsbyid(this.movieid).subscribe((data) => {
      this.moviedetails = data;

      console.log(this.moviedetails);
    });
    setTimeout(() => {
      this.loader = false;
    }, 1000);
  }
}
