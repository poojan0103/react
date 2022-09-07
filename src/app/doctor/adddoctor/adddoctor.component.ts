import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.component.html',
  styleUrls: ['./adddoctor.component.css']
})
export class AdddoctorComponent implements OnInit {

  constructor(private service:AppService ) { }
 addDoctor(){
  let doctor = {
    email:"poojan@gmail.com",
    first_name :"Poojan",
    last_name :"Thakkar"
    /*dName:"ram",
    dExp:25,
    dAge:55,
    dEmail:"ram@gmail.com"
  */}
  /*this.service.addDoctor(doctor).subscribe(res=>{
    console.log(res);
  })*/

}
  ngOnInit(): void {
  }

}
