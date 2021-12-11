import { Component, OnInit } from '@angular/core';
import {
faCog
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
public faCog=faCog;
  constructor() { }

  ngOnInit(): void {
  }

}
