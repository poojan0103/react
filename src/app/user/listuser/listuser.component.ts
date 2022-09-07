import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  constructor(private service:AppService) { }
  users:any[] = [];


  ngOnInit(){
    this.service.getData().subscribe(res=>{
      console.log(res);
      this.users = res;

    })
  }

}
