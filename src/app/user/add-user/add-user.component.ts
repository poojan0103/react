import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private service:AppService) { }
  addUser (){
    let user ={
      email:"ram@gmail.com",
    first_name :"Ram",
    last_name :"Patel"
    }
    /*this.service.addUser(user).subscribe(res=>{
      console.log(res);
    })*/
  }

  ngOnInit(): void {
  }

}
