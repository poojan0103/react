import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  data(name: any){
    alert(name);
  }

  student:any = {
    name:"jay",
    age:25,
    marks:20
  }
  students:any =[
    {
      name:"Ajay",
      gender:"Male",
      
      age:22
      
    },
    {
      name:"Mark",
      gender:"Male",
      age:20
    },
    {
      name:"chole",
      gender:"Female",
      age:45
 
    }
  ]

  constructor() { }




  ngOnInit(): void {
  }

}
