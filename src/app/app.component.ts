import { Component } from '@angular/core';
import { ViewStateService, ViewType } from './services/view-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'beauty-blog';
  currentView!: ViewType;

  constructor(private viewStateService: ViewStateService) {
    this.viewStateService.currentView$.subscribe((view) => {
      this.currentView = view;
    });
  }

  /*VIEW*/
  toggleView() {
    this.currentView =
      this.currentView === ViewType.Creator ? ViewType.User : ViewType.Creator;
    this.viewStateService.setCurrentView(this.currentView);
  }
  getViewButtonText(): string {
    return this.currentView === 'user' ? 'User' : 'Creator';
  }
}
