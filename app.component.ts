import { Component } from '@angular/core';

@Component({
  //metadata
  selector: 'app-root',
  templateUrl: './app.component.html',
 // template : `<h1> djkhfjf  </h1>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hi all good eve';
  name = "janani";
  userName = "dummy";
  isMarried : boolean = true;

  imageSrc = "../assets/images.jpeg";

  sayHello(){
    alert("hi all");
  }
}
