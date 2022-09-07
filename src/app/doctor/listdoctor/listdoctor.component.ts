import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-listdoctor',
  templateUrl: './listdoctor.component.html',
  styleUrls: ['./listdoctor.component.css']
})
export class ListdoctorComponent implements OnInit {

  constructor(private service:AppService) { }

  doctors:any[] =[]; 

  ngOnInit() {
    this.service.getData().subscribe(res=>{
      console.log(res);
      this.doctors = res;

    })
  }

}
