import { Component } from '@angular/core';

@Component({
  selector: 'app-formscomponents',
  templateUrl: './formscomponents.component.html',
  styleUrls: ['./formscomponents.component.css']
})
export class FormscomponentsComponent {
Submit(login: any){
  console.log("forms submitted",login)
}
}
