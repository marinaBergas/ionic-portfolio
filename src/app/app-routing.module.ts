import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './home/components/about/about.component';
import { ProjectDetailsComponent } from './home/components/project-details/project-details.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component:HomeComponent
  // },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  { path: 'portfolio/:id', component: ProjectDetailsComponent },

  { path: 'about', component: AboutComponent },
  { path: 'sign-in',
  loadChildren: () =>
  import('./login/login.module').then((m) => m.LoginPageModule),
 },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  }
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
