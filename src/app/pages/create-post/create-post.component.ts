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

  constructor(
    private localStorageService: LocalStorageService,
    private viewStateService: ViewStateService
  ) {
    this.viewStateService.currentView$.subscribe((view) => {
      this.currentView = view;
    });
  }

  /* handleFileInput=TEMPORARY FOR IMAGES, change to thumbnail url link*/
  handleFileInput(event: any) {
    const files: FileList = event.target.files;

    if (files.length > 0) {
      const file = files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        this.post.thumbnailUrl = reader.result as string;
      };

      reader.readAsDataURL(file);
    }
  }
  onSubmit() {
    if (!this.post.thumbnailUrl) {
      return;
    }
    this.post.id = Date.now().toString() + Math.floor(Math.random() * 10);
    this.post.tags = this.tagInput.split(',').map((tag) => tag.trim());

    const newPost: Post = {
      id: this.post.id,
      title: this.post.title,
      body: this.post.body,
      tags: this.post.tags,
      thumbnailUrl: this.post.thumbnailUrl,
      creationDate: this.post.creationDate,
      likes: this.post.likes,
      dislikes: this.post.dislikes,
      comments: this.post.comments,
    };

    let posts: Post[] = this.localStorageService.get('posts') || [];
    posts.push(newPost);

    this.localStorageService.set('posts', posts);

    this.post = {
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
    this.tagInput = '';
  }
}
