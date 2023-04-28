import { Component, OnInit, ViewChild } from '@angular/core';
// import { MessageService } from 'src/app/services/message.service';
import { MatSidenav} from '@angular/material/sidenav'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Stock Market App';

  @ViewChild(MatSidenav)'sidenav':MatSidenav;
  
  public isOpened = false;

  public openLeftSide(){
    this.isOpened = !this.isOpened;
    this.sidenav.toggle();
    console.log('menu');
  }
  public closeLeftSide(){
    this.isOpened = false;
  }



  // constructor(public messageService : MessageService){}
  // ngOnInit():void{
  //   // this.messageService.message = 'Hello Message Service';
  // }
  
}
