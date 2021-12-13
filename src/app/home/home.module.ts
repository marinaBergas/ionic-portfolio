import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { RouteReuseStrategy } from '@angular/router';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ResumeComponent } from './components/resume/resume.component';
import { ClientsComponent } from './components/clients/clients.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { FooterComponent } from './components/footer/footer.component';

import { SideMenuComponent } from './components/side-menu/side-menu.component';



// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  declarations: [
    HomePage,
    HeaderComponent,
    AboutComponent,
    PortfolioComponent,
    ProjectDetailsComponent,
    OurServicesComponent,
    ResumeComponent,
    ClientsComponent,
    BlogComponent,
    ContactMeComponent,
    FooterComponent,
<<<<<<< HEAD
SideMenuComponent],
=======
SideBarComponent  ],
>>>>>>> 519cc46331d41fb100c8f3c02b7c2eca9d49d0fa
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
})
export class HomePageModule {}
