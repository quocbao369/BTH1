import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginValid = true;
  public message: string = '';
  public username: string = '';
  public password: string = '';
  constructor(private httpService:HttpServiceService,
    private router: Router){}
  login() {
    this.httpService.login(this.username, this.password)
      .subscribe((resp) => {
        console.log('Successfully logged in');
        this.message = resp.msg;
        this.router.navigate(['stock', 'stock-list'], {
          // queryParams: {page: 1}
        });
        console.error('username', this.username);
        console.error('password', this.password);
      }, (err) => {
        console.error('Error logging in', err);
        this.message = err.error.msg;
      });
  }
}
