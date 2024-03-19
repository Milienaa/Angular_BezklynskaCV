import { Component } from '@angular/core';
import { contact, languages, skills } from './data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
  
  
export class SidebarComponent {
  contact = contact;
  skills = skills;
  languages = languages;
}
