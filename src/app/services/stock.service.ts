import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError as ObservableThrow } from 'rxjs';
import { of as ObservableOf} from 'rxjs';
import { Stock } from '../model/stock';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StockService {

  private stocks! : Stock[];
  constructor(private http: HttpClient) {
    // this.stocks =[
    //   new Stock('Test Stock Company','TSC',85,80,'NASDAQ',false),
    //   new Stock('Second Stock Company','SSC',10,20,'NSE',false),
    //   new Stock('Last Stock Company','LSC',876,765,'NYSE',false),
    // ];
    
   }
   getStocks():Observable<Stock[]>{
      return ObservableOf(this.stocks) ;
    }
    getStock(code : any):Observable<Stock>{
      return this.http.get<Stock>('api/stock/'+ code)
      
    }
    createStock(stock : Stock){
      let foundStock = this.stocks.find(each => each.code === stock.code);
      if (foundStock){
        return ObservableThrow({msg:'Stock with code '+ 
      stock.code + ' already exists'});
      }
      this.stocks.push(stock);
      return ObservableOf({msg:'Stock with code '+ 
      stock.code + ' successfully created'});
    }
    toggleFavorite(stock :Stock) : Observable<Stock>{
      let foundStock = this.stocks.find(each => each.code === stock.code);
      if (foundStock) {
        foundStock.favorite = !foundStock.favorite;
        return ObservableOf(foundStock);
      }
      return ObservableOf();
    }
}
