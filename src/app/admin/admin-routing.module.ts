import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';

import { AdminPage } from './admin.page';

const routes: Routes = [
  { path: '', component: AdminPage ,canActivate:[AuthGuard],children:[
    // {path:'dashboard',component:AdminDashboardComponent}      ,
  ]},
  // {
  //   path: '',
  //   component: AdminPage
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
