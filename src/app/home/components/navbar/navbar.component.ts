import {
  Component, OnInit,

} from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public scrollNavbar = false;
  public activeLink = '';
  activePageTitle = 'Dashboard';

  pages = [
    {
      title: 'home',
      url:document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }),
    }
  ];


  constructor(public translate: TranslateService, private router: Router , private menu: MenuController,private authService: AuthService ) {
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|ar/) ? browserLang : 'en');
  };
  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  };
  toHome() {
    document.getElementById('home').scrollIntoView({behavior:'smooth'});
    this.activeLink = 'home';
  };
  toAbout() {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    this.activeLink = 'about';
  };
  toServices() {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    this.activeLink = 'services';
  };
  toResume() {
    this.activeLink = 'resume';
    document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
  }
  toBlog() {
    this.activeLink = 'blog';
    document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
  }
  toContact() {
    this.activeLink = 'contact';
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
  toSignIn() {
    this.activeLink = 'signIn';
    this.router.navigate(['sign-in']);
  }
  toLogOut(){
    this.activeLink = 'logOut';

  };
  get isLoggedIn() { return this.authService.isLoggedIn(); }

  ngOnInit(): void {}
}
