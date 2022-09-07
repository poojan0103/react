import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  public getHello(): string {
    return 'Hello World!';
  }

  public getData():Observable<any>{

    return this.http.get("https://tutorialapi1.herokuapp.com/tutorial");
  }
  public addTutorial(user: any):Observable<any>{
    return this.http.post("https://tutorialapi1.herokuapp.com/tutorial",user);
    

  }
}