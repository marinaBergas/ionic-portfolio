import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import {
  faBuilding,
  faMapMarker,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons';
import { Education, WorkExperiences } from 'src/app/models/interfaces';
// import { Education, WorkExperiences } from '../../models/interfaces';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent implements OnInit {
  public icons = {
    faBuildingIcon: faBuilding,
    faMapMarkerIcon: faMapMarker,
    faCalendarIcon: faCalendar,
  };

  public experiences: WorkExperiences[] = [
    {
      prevExperience: 'Front end developer',
      workPlace: 'orange labs',
      location: 'cairo',
      period: 'full time',
      periodCalenderStart: 'november2021',
      periodCalenderEnd: 'present',
    },
  ];
  public eductions: Education[] = [
    {
      education: 'diploma Front End Development Track ',
      educationPlace: 'information Technology Institute',
      educationStart: 'january2021',
      educationEnd: 'april 2021',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    Aos.init();
  }
}
