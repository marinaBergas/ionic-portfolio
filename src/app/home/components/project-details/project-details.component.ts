import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../../../models/interfaces';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
public projectId: any;
public projectDetails: Project[] = [];

  constructor(private projectService: ProjectService,private route: Router,private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
  this.activeRoute.paramMap.subscribe(params=>{
    this.projectId=params.get('id');
  });
  this.projectService.getProjectList().subscribe((data)=>{
    // eslint-disable-next-line no-underscore-dangle
    this.projectDetails= data.filter(p=>p._id===this.projectId);

  });
  }

}
