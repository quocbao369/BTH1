import { Component } from '@angular/core';
import { Stock } from 'src/app/model/stock';
import { MessageService } from 'src/app/services/message.service';
import { StockService } from '../../services/stock.service';
import { HttpServiceService } from 'src/app/services/http-service.service';


@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css'],
  providers: [MessageService]
})
export class CreateStockComponent {
  public stock : Stock;

  public confirmed = false;
  public message ='';
  //các giá trị của option
  public exchanges =['NYSE','NASDAQ','OTHER'];

  constructor(private stockService : StockService,
              public messageService : MessageService,
              private httpService:HttpServiceService){
    this.stock = new Stock ('','Test Stock Company','',0,0,'NASDAQ',false);
    this.messageService.message = 'Tạo thành công Stock: '+this.stock.name;
    this. confirmed = false;
  }
  setStockPrice(price: number){
    this.stock.price = price;
    this.stock.previousPrice = price;
  }
  // createStock(stockForm:any){
  //   if(stockForm.valid){
  //     let created = this.httpService.postStock();
  //   }
  // }

  // const body = {"name":"Last Stock Company",
  // "code":"LSC",
  // "price":"876",
  // "previousPrice":"765",
  // "exchange":"NYSE",
  // "favorite":"false"};
  // this.httpService.postStock(body).subscribe((data)=>{
  //   console.log('postStock',data);
  createStock(stockForm: any){
    if (stockForm.valid){
      console.log('Creating stock ',this.stock);
      const created = this.stock;
      if(created) {
        this.message = 
        'Succesfully created stock with stock code: '
              + this.stock.code;
        // this.stock = new Stock('','',0,0,'NASDAQ',false);
        this.httpService.postStock(created).subscribe((data)=>{
          console.log('postStock',data);})
          this.confirmed = false;
      }else{
        this.message =
         'Stock with stock code: ' + this.stock.code +
        ' already exists';
      }
    }
    else{
      console.error('Stock form is in an invalid state');
    }
  }
  
  createStock1(stockForm: any) {
    if (stockForm.valid) {
      this.stockService.createStock(this.stock)
          .subscribe((result: any) => {
            this.message = result.msg;
            this.stock = new Stock('','','',0,0,'NASDAQ',false);
          }, (err) => {
            this.message = err.error.msg;
          });
    } else {
      console.error('Stock form is in an invalid state');
    }
}
}

