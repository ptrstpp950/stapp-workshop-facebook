import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, delay, catchError } from 'rxjs/operators';

import { User } from "src/app/shared/interfaces/user.interface";
import { PostsResponses } from 'src/app/posts/interfaces/responses/posts-response.interface';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<PostsResponses>(environment.postUrl)
      .pipe(
        map((response) => {
          return response.posts;
        }),
        map((posts => {
          const users = posts.map(p => p.author);
          return users;
        }))
      )
  }

  getUserById(userId: string){
    return this.getUsers()
      .pipe(
        map((users) => {
          return users.find(user => user.id === userId);
        }),
        catchError(err=> {
          throw err;
        })
      );
  }
}
