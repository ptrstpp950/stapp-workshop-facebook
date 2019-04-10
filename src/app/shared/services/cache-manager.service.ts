import { Injectable } from '@angular/core';
import { HttpResponse, HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CacheManagerService {

  private dict:Map<string,any> = new Map<string, any>();

  constructor(
    ) { }

  has(url: string): boolean {
    return this.dict.has(url);
  }

  save(url: string, response: HttpEvent<any>) {
    this.dict.set(url, response);
  }


  get(url:string) {
    return this.dict.get(url);
  }

  remove(url: string) {
    this.dict.delete(url);
  }
}
