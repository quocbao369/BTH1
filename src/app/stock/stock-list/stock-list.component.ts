import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';
import { StockService } from 'src/app/services/stock.service';
import { HttpServiceService } from 'src/app/services/http-service.service';


@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  public stocks! : Stock[];
  constructor(private httpService:HttpServiceService){}
  ngOnInit() {
    this.httpService.getStocks()
    .subscribe(stocks => {
      this.stocks =stocks;
    });
    // this.stocks =this.stockService.getStocks();
  }
  onToggleFavorite(stock : Stock){
    console.log('Favorite for stock',stock,'was triggered');
    // this.stockService.toggleFavorite(stock);
    // stock.favorite = !stock.favorite;
  }
}
