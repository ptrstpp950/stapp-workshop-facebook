import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostsResponses } from '../interfaces/responses/posts-response.interface';
import { environment } from 'src/environments/environment';

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
}
