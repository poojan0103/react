import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-listtutorial',
  templateUrl: './listtutorial.component.html',
  styleUrls: ['./listtutorial.component.css']
})
export class ListtutorialComponent implements OnInit {

  constructor(private service:AppService) { }
  
  tutorial:any[] = [];



  ngOnInit() {
    this.service.getData().subscribe(res=>{
      console.log(res);
      this.tutorial = res;

    })
  }

}
