import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import {
  faMapMarker,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css'],
})
export class ContactMeComponent implements OnInit {
  public contacts = {
    address: 'alex',
    email: 'marina.bergas@gmail.com',
    phone: '+201272747752',
  };

  public icons = {
    faMapMarkerIcon: faMapMarker,
    faPhoneIcon: faPhone,
    faEnvelopeIcon: faEnvelope,
  };
  // public contacts = {
  //   address: contacts.address,
  //   email: contacts.email,
  //   phone: contacts.phone,
  // };
  constructor() {}

  ngOnInit(): void {
    Aos.init();
  }
}
