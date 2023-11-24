import { Component, OnInit } from '@angular/core';
import {
  ViewStateService,
  ViewType,
} from 'src/app/services/view-state.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Post } from 'src/app/interfaces/post';
import { Creator } from 'src/app/interfaces/creator';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
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
  toggleView() {
    this.currentView =
      this.currentView === ViewType.Creator ? ViewType.User : ViewType.Creator;
    this.viewStateService.setCurrentView(this.currentView);
  }

  ngOnInit() {
    this.viewStateService.setCurrentView(
      this.viewStateService.getCurrentView()
    );
    this.currentView = this.viewStateService.getCurrentView();
    this.posts = this.getSavedPostData() || [];
  }
  createNewPost() {
    this.router.navigate(['/CreatePost']);
  }
  navigateToPost(postId: string) {
    this.router.navigate(['/BlogPost', postId]);
  }
  getSavedPostData() {
    return this.localStorageService.get('posts');
  }
}
