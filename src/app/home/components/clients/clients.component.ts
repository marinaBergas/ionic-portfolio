import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  public clients = [
    {
      clientOpinion:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      img: 'assets/client1.webp',
      name: ' Jeremy Winston',
    },
    {
      clientOpinion:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      img: 'assets/client2.webp',
      name: '  Richard Atkinson',
    },
    {
      clientOpinion:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      img: 'assets/client3.webp',
      name: ' Jeremy Winston',
    },
    {
      clientOpinion:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      img: 'assets/client4.webp',
      name: '  Richard Atkinson',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    Aos.init();
  }
}
