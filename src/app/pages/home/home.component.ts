import { Component, OnInit } from '@angular/core';
import {
  ViewStateService,
  ViewType,
} from 'src/app/services/view-state.service';
import { Router } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  currentView!: ViewType;
  Creator = ViewType.Creator;
  User = ViewType.User;
  posts: Post[] = [];

  constructor(
    private viewStateService: ViewStateService,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {
    this.viewStateService.currentView$.subscribe((view) => {
      this.currentView = view;
    });
  }
  ngOnInit() {
    this.viewStateService.setCurrentView(
      this.viewStateService.getCurrentView()
    );
    this.currentView = this.viewStateService.getCurrentView();
    this.posts = this.getSavedPostData() || [];
  }

  getSavedPostData() {
    return this.localStorageService.get('posts');
  }
  navigateToPost(postId: string) {
    this.router.navigate(['/BlogPost', postId]);
  }
  getCollaborationPosts(): Post[] {
    return this.posts.filter((post) => post.collaboration === true);
  }
  getHighlightPosts(): Post[] {
    return this.posts.filter((post) => post.highlight === true);
  }
}
