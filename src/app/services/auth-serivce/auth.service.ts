import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

const loginUrl = 'https://hood-hm.herokuapp.com/api/login';
const logoutUrl = 'https://hood-hm.herokuapp.com/api/logout';
const registerUrl = 'https://hood-hm.herokuapp.com/api/register';
const userUrl = 'https://hood-hm.herokuapp.com/api/user';

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
