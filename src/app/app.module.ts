import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmployeesComponent } from './employees/employees.component';
import { StudentComponent } from './student/student.component';
import  {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdddoctorComponent } from './doctor/adddoctor/adddoctor.component';
import { ListdoctorComponent } from './doctor/listdoctor/listdoctor.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { ListuserComponent } from './user/listuser/listuser.component';
import { CartComponent } from './ecom/cart/cart.component';
import { DashboardComponent } from './ecom/dashboard/dashboard.component';
import { NavbarComponent } from './ecom/navbar/navbar.component';
import { ProductComponent } from './ecom/product/product.component';
import { ProductlistComponent } from './ecom/productlist/productlist.component';
import { AddtutorialComponent } from './tutorial/addtutorial/addtutorial.component';
import { ListtutorialComponent } from './tutorial/listtutorial/listtutorial.component';
import { RegistertutorialComponent } from './tutorial/registertutorial/registertutorial.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    EmployeesComponent,
    StudentComponent,
    HeaderComponent,
    FooterComponent,
    AdddoctorComponent,
    ListdoctorComponent,
    AddUserComponent,
    ListuserComponent,
    CartComponent,
    DashboardComponent,
    NavbarComponent,
    ProductComponent,
    ProductlistComponent,
    AddtutorialComponent,
    ListtutorialComponent,
    RegistertutorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
