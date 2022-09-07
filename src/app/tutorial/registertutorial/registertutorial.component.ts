import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-registertutorial',
  templateUrl: './registertutorial.component.html',
  styleUrls: ['./registertutorial.component.css']
})
export class RegistertutorialComponent implements OnInit {

  constructor(private service:AppService) { }
  
  tutorialGroup  = new FormGroup({
    title :new FormControl('',[Validators.required,Validators.minLength(1)])
  })
  addTutorial(){
    this.service.addTutorial(this.tutorialGroup.value).subscribe(data=>{
      console.log(data);
      alert('Tutorial added successfully');
    })
  }
  ngOnInit() {
  }

}
