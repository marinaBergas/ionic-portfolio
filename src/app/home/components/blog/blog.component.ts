import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  public blogs = [
    {
      blogHeader: 'Front-end Developer Demands today',
      blogDate: 'Jun 28, 2020',
      readTime: '2 mins read',
    },
    {
      blogHeader: 'I Used React JS',
      blogDate: 'Jun 28, 2020',
      readTime: '2 mins read',
    },
    {
      blogHeader: 'Why Front-end Developer So Important',
      blogDate: 'Jun 28, 2020',
      readTime: '2 mins read',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    Aos.init();
  }
}
