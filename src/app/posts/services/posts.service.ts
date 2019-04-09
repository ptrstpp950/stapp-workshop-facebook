import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from '../interfaces/posts.interface';
import { PostsResponses } from '../interfaces/responses/posts-response.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http:HttpClient
  ) { }

  getPosts() {
    return this.http.get<PostsResponses>('/assets/posts.json');
  }
}
