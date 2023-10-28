import { Component } from '@angular/core';
import {
  ViewStateService,
  ViewType,
} from 'src/app/services/view-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  currentView!: ViewType;
  Creator = ViewType.Creator;
  User = ViewType.User;

  constructor(private viewStateService: ViewStateService) {
    this.viewStateService.currentView$.subscribe((view) => {
      this.currentView = view;
    });
  }
}
