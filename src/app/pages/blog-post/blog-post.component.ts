import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { Comment } from 'src/app/interfaces/comment';
import {
  ViewType,
  ViewStateService,
} from 'src/app/services/view-state.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
})
export class BlogPostComponent {
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
  newComment: Comment = {
    id: '',
    text: '',
    name: '',
  };

  constructor(
    private viewStateService: ViewStateService,
    private route: ActivatedRoute,
    private localStorageService: LocalStorageService
  ) {
    this.viewStateService.currentView$.subscribe((view) => {
      this.currentView = view;
    });
  }
  getSavedPostData(): Post[] {
    return this.localStorageService.get('posts');
  }
  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get('id');

    const postData = this.getSavedPostData().find(
      (post: any) => post.id === postId
    );

    if (postData) {
      this.post = postData;
    }
    if (this.post) {
      this.post.likes = this.post.likes || 0;
      this.post.dislikes = this.post.dislikes || 0;
    }
  }
}
