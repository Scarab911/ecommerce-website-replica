import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { AmazonItem } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public bestSellersList: any;
  constructor(private http: HttpClient) {
    this.bestSellersList = [];
  }

  public bestsellersTvList(): Observable<any> {
    //end point host:
    let host: string =
      'https://amazon-products1.p.rapidapi.com/bestseller?country=US&categoryId=172659';

    // auth keyword
    let authKeyword = 'X-Rapidapi-Key';

    //rapid API key:
    let key: string = 'b15f0656c3mshacf46ac2f93b677p1f45ecjsn14de2f207777';

    //headers
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set(authKeyword, key);
    this.http.get(host);

    //Get request
    this.http.get<any>(host, { headers: headers }).subscribe((resp) => {
      console.log(resp.results);
      this.bestSellersList = resp.results;
      console.log(this.bestSellersList[0]);
    });

    return this.bestSellersList;
  }
}
