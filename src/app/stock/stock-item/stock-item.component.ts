import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Stock } from 'src/app/model/stock';
import { StockService } from '../../services/stock.service';


@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent{
  // public stocks: Stock[] = [];
  @Input() public stock!: Stock;
  @Output() toggleFavorite = new EventEmitter<Stock>();

  constructor(private stockService: StockService){}

  onToggleFavorite(event: any){
    console.log('Favorite for stock',event,'was triggered');
    this.stockService.toggleFavorite(this.stock)
  }
}
