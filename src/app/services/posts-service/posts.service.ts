import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://hood-hm.herokuapp.com/posts';
const hoodPostUrl = 'https://hood-hm.herokuapp.com/hood/posts';


@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<any> {
    return this.http.get(`${baseUrl}`);
  }

  getPost(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  getHoodPosts(id: any): Observable<any> {
    return this.http.get(`${hoodPostUrl}/${id}`);
  }

  addPost(data: { title: string; post: string; hood: string }) {
    return this.http.post(baseUrl, data);
  }

  updatePost(id: any, data: { title: string; post: string;}) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deletePost(id: any) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
