import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit{

  constructor(private httpService:HttpServiceService){}

  ngOnInit(): void {
    const body = {"name":"Last Stock Company",
  "code":"LSC",
  "price":"876",
  "previousPrice":"765",
  "exchange":"NYSE",
  "favorite":"false"};
  this.httpService.postStock(body).subscribe((data)=>{
    console.log('postStock',data);
  })
  }
}
