import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  public getHmMenProducts(): Observable<any> {
    let params = {
      country: 'eur',
      lang: 'en',
      currentpage: '0',
      pagesize: '30',
      categories: 'men_all',
      concepts: 'H&M MAN',
    };

    // auth keyword, host and auth key
    let authKeyword = 'X-Rapidapi-Key';
    let host: string =
      'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list';
    let key: string = 'b15f0656c3mshacf46ac2f93b677p1f45ecjsn14de2f207777';

    //headers
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set(authKeyword, key);

    //GET the request
    let request = this.http.get<any>(host, {
      headers: headers,
      params: params,
    });
    return request;
  }

  public getItemDetailsByCode(productCode: string): Observable<any> {
    let params = {
      country: 'eur',
      lang: 'en',
      productcode: productCode,
    };

    // auth keyword, host and auth key
    let authKeyword = 'X-Rapidapi-Key';
    let host: string =
      'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail';
    let key: string = 'b15f0656c3mshacf46ac2f93b677p1f45ecjsn14de2f207777';

    //headers
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set(authKeyword, key);

    //GET the request
    let request = this.http.get<any>(host, {
      headers: headers,
      params: params,
    });
    console.log('request sent');

    return request;
  }
}
