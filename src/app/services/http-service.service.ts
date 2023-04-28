import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Stock } from '../model/stock';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  private REST_API_SERVER='http://localhost:3000';
  private httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
    }),
  };

  constructor(private httpCilent: HttpClient) { }
  public getStocks() : Observable<any>{
    const url = `${this.REST_API_SERVER}/stocks`;
    console.log('getStock23=',url);
    return this.httpCilent.get<any>(url, this.httpOptions);
  }
  //chọn stock 
  public getStock(id : string) : Observable<Stock>{
    const url = `${this.REST_API_SERVER}/stocks/${id}`;
    console.log('getStock2=',id);
    return this.httpCilent.get<Stock>(url).pipe(
      )
  }
  //xóa stock
  public deleteStock(id: string): Observable<any> {
    const url = `${this.REST_API_SERVER}/stocks/${id}`;
    return this.httpCilent.delete<any>(url, this.httpOptions);
  }
  public postStock(body : any): Observable<any>{
    const url = `${this.REST_API_SERVER}/stocks`;
    console.log('postStock=',url);
    console.log('postStock: body',body);
    return this.httpCilent.post<any>(url,body);
  }
  public postUser(user: any){
    const url = `${this.REST_API_SERVER}/user`;
    return this.httpCilent.post<any>(url,user);
  }
  login(username: string, password: string): Observable<any> {
    const url = `${this.REST_API_SERVER}/user`;
    return this.httpCilent.post(url, {
      username: username,
      password: password
    }).pipe(map((resp: any) => {
      return resp;
    }));
  }
}
