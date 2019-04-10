import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, filter, single } from 'rxjs/operators';

import { PostsResponses } from '../interfaces/responses/posts-response.interface';
import { environment } from 'src/environments/environment';
import { post } from 'selenium-webdriver/http';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post.interface';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http:HttpClient
  ) { }

  getPosts() {
    return this.http.get<PostsResponses>(environment.postUrl);
  }

  getPostById(postId: string): Observable<Post> {
    return this.getPosts()
      .pipe(
        map((response)=> {
          return response.posts;
        }),
        map((posts) =>{
          return posts.filter((post)=>{
            return post.id === postId;
          });
        }),
        map(posts=> posts[0])
      );
  }

}
