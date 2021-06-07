import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

const baseurl = 'http://localhost:8000/business/';
const hoodBusinessUrl = 'http://localhost:8000/hood/business';

@Injectable({
  providedIn: 'root',
})
export class BusinessService {
  constructor(private http: HttpClient) {}

  getHoodBusinessData(id: any): Observable<any> {
    return this.http.get(`${hoodBusinessUrl}/${id}`);
  }

  addBusiness(data: {
    business_name: string;
    business_email: string;
    about_business: string;
  }) {
    return this.http.post(baseurl, data);
  }
}
