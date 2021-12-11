import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPageRoutingModule } from './admin-routing.module';

import { AdminPage } from './admin.page';
import { AdminComponent } from './admin/admin.component';
import { ProjectsTableComponent } from './projects-table/projects-table.component';
import { AddNewProjectComponent } from './add-new-project/add-new-project.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPageRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  declarations: [AdminPage
    ,AdminComponent,
    ProjectsTableComponent,
    AddNewProjectComponent,
    AdminDashboardComponent
   ]
})
export class AdminPageModule {}
