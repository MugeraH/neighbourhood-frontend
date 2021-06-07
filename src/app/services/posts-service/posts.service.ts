import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8000/posts/';
const hoodPostUrl = 'http://localhost:8000/hood/posts';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<any> {
    return this.http.get(`${baseUrl}`);
  }

  getHoodPosts(id: any): Observable<any> {
    return this.http.get(`${hoodPostUrl}/${id}`);
  }

  addPost(data: { title: string; post: string; hood: string }) {
    return this.http.post(baseUrl, data);
  }

  // updateBusiness(
  //   id: any,
  //   data: {
  //     business_name: string;
  //     business_email: string;
  //     about_business: string;
  //   }
  // ) {
  //   return this.http.put(`${baseUrl}/${id}`, data);
  // }

  // deletePost(id: any) {
  //   return this.http.delete(`${baseUrl}/${id}`);
  // }
}
