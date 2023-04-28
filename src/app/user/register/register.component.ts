import { Component } from '@angular/core';
import { User } from 'src/app/model/user';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public user : User;
  public message ='';
  constructor(private httpService:HttpServiceService,
    public messageService : MessageService,){
    this.user = new User('','','','');
  }
  createUser(userForm: any){
    if(userForm){
      const user = this.user;
      if(user){
        this.message = 
        'Đăng kí thành công tài khoản: '
              + this.user.username;
        this.httpService.postUser(user).subscribe((data)=>{
          console.log('postuser',data);})
      this.user = new User('','','','');
      }else{
        console.log('loi 1');
      }
    }else{
      console.log('loi 2');
    }

  }

}
