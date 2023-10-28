import { Component } from '@angular/core';
import {
  ViewStateService,
  ViewType,
} from 'src/app/services/view-state.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent {
  currentView!: ViewType;
  Creator = ViewType.Creator;
  User = ViewType.User;

  constructor(private viewStateService: ViewStateService) {
    this.viewStateService.currentView$.subscribe((view) => {
      this.currentView = view;
    });
  }
}
