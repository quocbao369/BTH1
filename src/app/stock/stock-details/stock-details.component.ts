import { Component, Input, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';
import { ActivatedRoute } from '@angular/router';
import { StockService } from 'src/app/services/stock.service';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {
  public stock! : Stock;
  constructor(private stockService: StockService,
              private route: ActivatedRoute,
              private httpService:HttpServiceService) { }

  ngOnInit() {
    const stockCode = this.route.snapshot.paramMap.get('id');
    this.httpService.getStock(stockCode ?? "").subscribe(stock => this.stock = stock);
    console.log('id='+ stockCode);
  }
  detele(event: any){
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Xóa stock');
    this.httpService.deleteStock(id ?? "").subscribe(
      (res) => {
        console.log('Successfully', id, res);
      },
      (err) => {
        console.error('Failed', id, err);
      }
    )
  }
  onToggleFavorite(event: any){
    console.log('Favorite for stock',event,'was triggered');
    this.stockService.toggleFavorite(this.stock)
  }
  getPercentChange() {
    let percent =   (this.stock.price-this.stock.previousPrice) * 100 / this.stock.price;
    return percent.toFixed(2);
}
}
