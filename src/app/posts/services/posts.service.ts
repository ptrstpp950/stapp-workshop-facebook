import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, delay } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { PostsResponses } from '../interfaces/responses/posts-response.interface';
import { environment } from 'src/environments/environment';

import { Post } from '../interfaces/post.interface';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http:HttpClient
  ) { }

  getPosts() {
    return this.http.get<PostsResponses>(environment.postUrl)
      .pipe(
        delay(2000)
      );
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
