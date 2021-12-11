import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/home/services/project.service';

@Component({
  selector: 'app-add-new-project',
  templateUrl: './add-new-project.component.html',
  styleUrls: ['./add-new-project.component.css'],
})
export class AddNewProjectComponent implements OnInit {
  newProjectForm: FormGroup;
  constructor(private fb: FormBuilder, private projectService: ProjectService) {
    this.newProjectForm = this.fb.group({
      projectTitle: ['', Validators.required],
      description: ['', Validators.required],
      projectImage: ['', Validators.required],
      projectType: ['', Validators.required],
      projectUrl: ['', Validators.required],
      logoImg: [''],
    });
  }
  get projectTitle() {
    return this.newProjectForm.get('projectTitle');
  }
  get description() {
    return this.newProjectForm.get('description');
  }
  get projectImage() {
    return this.newProjectForm.get('projectImage');
  }
  get projectType() {
    return this.newProjectForm.get('projectType');
  }
  get logoImg() {
    return this.newProjectForm.get('logoImg');
  }
  get projectUrl() {
    return this.newProjectForm.get('projectUrl');
  }
  get projectControls() {
    return this.newProjectForm.controls;
  }

  ngOnInit(): void {}

  onSubmit() {
    this.projectService
      .addProject(
        this.projectTitle?.value,
        this.description?.value,
        this.projectImage?.value,
        this.projectType?.value,
        this.logoImg?.value,
        this.projectUrl?.value
      )
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => error
      );
  }
}
