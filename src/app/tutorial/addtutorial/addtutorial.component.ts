import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-addtutorial',
  templateUrl: './addtutorial.component.html',
  styleUrls: ['./addtutorial.component.css']
})
export class AddtutorialComponent implements OnInit {

  constructor(private service:AppService) { }
  addTutorial(){

    let tut = {
      title:"React",
      description:"React Tutorial",
      published:"True",
      fees:"20000"
    }
    this.service.addTutorial(tut).subscribe(res=>{
      console.log(res);
    })
  }

  ngOnInit(){
  }

}
