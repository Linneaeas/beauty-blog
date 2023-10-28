import { Component } from '@angular/core';
import {
  ViewStateService,
  ViewType,
} from 'src/app/services/view-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  currentView!: ViewType;
  Creator = ViewType.Creator;
  User = ViewType.User;

  constructor(
    private viewStateService: ViewStateService,
    private router: Router
  ) {
    this.viewStateService.currentView$.subscribe((view) => {
      this.currentView = view;
    });
  }
  createNewPost() {
    this.router.navigate(['/CreatePost']);
  }
}
