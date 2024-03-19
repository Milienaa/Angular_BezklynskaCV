import { Component } from '@angular/core';
import { about, education, experience } from './info';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  about = about;
  education = education;
  experience = experience;
}
