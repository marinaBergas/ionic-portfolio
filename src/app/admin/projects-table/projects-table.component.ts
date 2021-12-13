import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/home/services/project.service';
import { Project } from 'src/app/home/models/interfaces';

@Component({
  selector: 'app-projects-table',
  templateUrl: './projects-table.component.html',
  styleUrls: ['./projects-table.component.css']
})
export class ProjectsTableComponent implements OnInit {
  public projectList: Project[] = [];
  constructor(private projectService: ProjectService, private route: Router) { }

  ngOnInit(): void {
    this.projectService.getProjectList().subscribe((data)=>{
      this.projectList = data;
    });
  }
  preview(project: any) {
    // eslint-disable-next-line no-underscore-dangle
    this.route.navigate(['/portfolio',  project._id ]);
  }

}
