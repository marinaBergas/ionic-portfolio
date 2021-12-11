import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import {
  faCartPlus,
  faBinoculars,
  faDesktop,
} from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css'],
})
export class OurServicesComponent implements OnInit {
  public faCartPlus = faCartPlus;
  public faBinoculars = faBinoculars;
  public faDesktop = faDesktop;
  public ourServices = [
    {
      // header: 'Development',
      header: 'DEVELOPMENT',
      paragraph:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    {
      header: 'Design',
      paragraph:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    {
      header: 'eCommerce',
      paragraph:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
  ];
  constructor(private translateService: TranslateService) {
    // this.translateService
    //   .get('SERVICES.DEVELOPMENT')
    //   .subscribe((text) => this.ourServices.map((el) => (el.header = text)));
    // this.translateService
    //   .get(['SERVICES.DEVELOPMENT', 'SERVICES.DESIGN'])
    //   .subscribe((translations) => {
    //     this.ourServices = [
    //       { header: translations['SERVICES.DEVELOPMENT'], paragraph: '' },
    //       { header: translations['SERVICES.DESIGN'], paragraph: '' },
    //       { header: translations['SERVICES.DEVELOPMENT'], paragraph: '' },
    //     ];
    //     console.log('marina', translations['SERVICES.DEVELOPMENT']);
    //   });
  }

  ngOnInit(): void {
    Aos.init();
  }
}
