import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  public blog_getApi = "https://localhost:7280/api/Blogs"

  constructor(public httpClient:HttpClient) { }

  getBlogs(){
    return this.httpClient.get(this.blog_getApi)
  }
}
