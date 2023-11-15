import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Post } from 'src/app/interfaces/post';
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
  post: Post = {
    id: '',
    title: '',
    body: '',
    tags: [],
    thumbnailUrl: '',
    creationDate: new Date(),
    likes: 0,
    dislikes: 0,
    comments: [],
  };
  tagInput: string = '';

  constructor(private viewStateService: ViewStateService) {
    this.viewStateService.currentView$.subscribe((view) => {
      this.currentView = view;
    });
  }
}
