import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStockComponent } from './stock/create-stock/create-stock.component';
import { StockListComponent } from './stock/stock-list/stock-list.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { StockDetailsComponent } from './stock/stock-details/stock-details.component';
import { PostDataComponent } from './stock/post-data/post-data.component';
import { GetDataComponent } from './stock/get-data/get-data.component';

const appRoutes: Routes = [
  { path:'',redirectTo:'user/login', pathMatch:'full'},
  { path:'user/login', component: LoginComponent},
  { path:'user/register', component: RegisterComponent},
  { path:'stock/stock-list', component: StockListComponent},
  { path:'stock/create-stock', component: CreateStockComponent},
  { path:'stock/post-data', component: PostDataComponent},
  { path:'stock/get-data', component: GetDataComponent},
  { path:'stock/:id',component: StockDetailsComponent},
  { path:'**', redirectTo:'user/register'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
