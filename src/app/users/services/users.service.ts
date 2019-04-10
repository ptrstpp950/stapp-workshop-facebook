import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from "src/app/shared/interfaces/user.interface";
import { HttpClient } from '@angular/common/http';
import { PostsResponses } from 'src/app/posts/interfaces/responses/posts-response.interface';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http:HttpClient
  ) { }

  getUserById(authorId: string): Observable<User> {
    return this.http.get<PostsResponses>(environment.postUrl)
      .pipe(
        map((response)=> {
          return response.posts;
        }),
        map((posts) =>{
          return posts.filter((post)=>{
            return post.author.id === authorId;
          });
        }),
        map(posts=> posts[0].author)
    );
  }
}
