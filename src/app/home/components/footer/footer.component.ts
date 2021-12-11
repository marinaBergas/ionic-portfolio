import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedin,
  faDribbble,
  faPinterest,
} from '@fortawesome/free-brands-svg-icons';
import { NavigationService } from '../../services/navigation.service';
import { navigationServiceValues } from 'src/app/models/interfaces';
import { OurServiceService } from '../../services/our-service.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  public socialIcons = [
    faFacebookF,
    faInstagram,
    faTwitter,
    faLinkedin,
    faDribbble,
    faPinterest,
  ];
  public navigations: navigationServiceValues[] = [];
  public ourServiceList: navigationServiceValues[] = [];
  public contacts = {
    address: 'alex',
    email: 'marina.bergas@gmail.com',
    phone: '+201272747752',
  };
  constructor(
    private navigationService: NavigationService,
    private ourService: OurServiceService
  ) {
    this.navigations = this.navigationService.navigations;
    this.ourServiceList = this.ourService.ourServiceList;
  }

  ngOnInit(): void {
    Aos.init();
  }
}
