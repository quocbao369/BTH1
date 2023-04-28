import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-rf-stock',
  templateUrl: './create-rf-stock.component.html',
  styleUrls: ['./create-rf-stock.component.css']
})
export class CreateRfStockComponent {
  public nameControl = new FormControl();
  public stockForm: FormGroup = new FormGroup({
    name  : new FormControl(null,Validators.required),
    code  : new FormControl(null,[Validators.required,Validators.minLength(2)]),
    price : new FormControl(null,[Validators.required, Validators.min(0)])
  });
  constructor(){}
  onSubmit(){
      console.log('Name Control Value',this.stockForm.value);
      alert("alo alo");
  }
}
