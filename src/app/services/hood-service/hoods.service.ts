import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import {Hood} from '../../interfaces/hood'

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HoodsService {
  constructor(private http: HttpClient) {}

  getHoodsData(): Observable<any> {
    return this.http.get('https://hood-hm.herokuapp.com/hood/');
  }

  getHoodData(id: number): Observable<any> {
    return this.http.get(`https://hood-hm.herokuapp.com/hood/${id}`);
  }

}
