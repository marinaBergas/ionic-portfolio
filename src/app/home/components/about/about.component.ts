import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  public skills = [
    { skillName: 'HTML5', percentage: '95%' },
    { skillName: 'css3', percentage: '92%' },
    { skillName: 'Bootstrap', percentage: '98%' },
    { skillName: 'javascript', percentage: '90%' },
  ];
  constructor() {}

  ngOnInit(): void {
    Aos.init();
  }
}
