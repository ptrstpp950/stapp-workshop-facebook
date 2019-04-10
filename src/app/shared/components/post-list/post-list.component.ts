import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/posts/interfaces/posts.interface';
import { PostsService } from 'src/app/posts/services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts:Posts = [];

  constructor(
    private postService: PostsService
  ) { }

  ngOnInit() {
    this.setupPosts();
  }

  trackPost(index:number,){
    return index;
  }

  private setupPosts() {
    this.postService.getPosts()
    .subscribe({
      next: (response:any) => {
        this.posts = response.posts;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
