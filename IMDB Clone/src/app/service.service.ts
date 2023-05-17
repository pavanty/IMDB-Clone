import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  public getmovie(): Observable<any> {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=bfe8e9f1c91594d12f0af15618d3ed8f&language=en-US'
    );
  }

  public getdetailsbyid(id: any): Observable<any> {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/' +
        id +
        '?api_key=bfe8e9f1c91594d12f0af15618d3ed8f&language=en-US'
    );
  }

  public getnowplaying(): Observable<any> {
    return this.http.get(
      'https://api.themoviedb.org/3/trending/all/week?api_key=bfe8e9f1c91594d12f0af15618d3ed8f&language=en-US'
    );
  }
  public getlatest(): Observable<any> {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=bfe8e9f1c91594d12f0af15618d3ed8f&language=en-US'
    );
  }
  public gettoprated(): Observable<any> {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=bfe8e9f1c91594d12f0af15618d3ed8f&language=en-US'
    );
  }
}
