import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/interfaces';
import * as Aos from 'aos';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  public projectList: Project[] = [];


  constructor(private projectService: ProjectService, private route: Router) {

  }

  ngOnInit() {
    Aos.init();
    this.projectService.getProjectList().subscribe((data)=>{
      this.projectList = data;
    });
  }

  onClickHandle(project: any) {
    // eslint-disable-next-line no-underscore-dangle
    this.route.navigate(['/portfolio',  project._id ]);
  }
  allHandle(): void {
    this.projectService.getProjectList().subscribe((data)=>{
      this.projectList = data;
    });  }
  typeReactHandle() {
    this.projectService.getProjectList().subscribe((data)=>{
      this.projectList = data.filter((el: Project) =>  el.projectType === 'react');
    });

  }
  typeAngularHandle() {
    this.projectService.getProjectList().subscribe((data)=>{
      this.projectList = data.filter((el: Project) =>  el.projectType === 'angular');
    });
  }
  typeLandinaPageHandle() {
    this.projectService.getProjectList().subscribe((data)=>{
      this.projectList = data.filter((el: Project) =>  el.projectType === 'landingPage');
    });

  }
}
