import { PostComment } from './post-comment';

export interface Post {
  id: string;
  title: string;
  body: string;
  tags: string[];
  thumbnailUrl: string;
  creationDate: Date;
  likes: number;
  dislikes: number;
  comments: PostComment[];
}
