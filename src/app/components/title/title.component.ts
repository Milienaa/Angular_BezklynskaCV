import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  fullName: string = "Bezklynska Miliena";
  profession: string = "Front-end developer";
}
