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
}
