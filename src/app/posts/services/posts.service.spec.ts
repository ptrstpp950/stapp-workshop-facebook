import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PostsService } from './posts.service';
import { environment } from 'src/environments/environment';
import * as Ajv from 'ajv';
import * as SCHEME from '../../../schemas/posts.scheme.json';
import { Post } from '../interfaces/post.interface';

function fakePost() {
  return {
    id: '',
    created_time: '',
    author: {
      id: '',
      name: '',
      avatar_url: ''
    },
    body: '',
    images: []
  } as Post;
}

describe('PostsService', () => {
  let service: PostsService = null;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.get(PostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return list of posts', () => {
    service.getPosts()
      .subscribe({
        next: (response) => {
          expect(response.posts.length).toEqual(2);
        }
      });
    const httpMock: HttpTestingController = TestBed.get(HttpTestingController);
    httpMock
      .expectOne(environment.postUrl)
      .flush({
        posts: [1, 2]
      });
  });

  it('should returns response valid format (use schema)', () =>{
    const ajv = new Ajv();
    const validator = ajv.compile(SCHEME['default']);

    service.getPosts()
      .subscribe({
        next: (response) => {
          const isValid = validator(response);
          expect(isValid).toEqual(true);
          //console.log(validator.errors);
        }
      });

    const httpMock: HttpTestingController = TestBed.get(HttpTestingController);
    httpMock
      .expectOne(environment.postUrl)
      .flush({
        posts: Array(5).fill(null).map(fakePost)
      });
  });
});
