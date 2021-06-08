import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

const loginUrl = 'http://localhost:8000/api/login';
const logoutUrl = 'http://localhost:8000/api/logout';
const registerUrl = 'http://localhost:8000/api/register';
const userUrl = 'http://localhost:8000/api/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  userLogin(data: { username: string; password: string }) {
    return this.http.post(loginUrl, data, { withCredentials: true });
  }

  userRegister(data: { username: string; email: string; password: string }) {
    return this.http.post(registerUrl, data);
  }

  getUser() {
    return this.http.get(userUrl, { withCredentials: true });
  }

  logout() {
    return this.http.post(logoutUrl, {}, { withCredentials: true });
  }
}
