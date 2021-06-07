import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8000/business';
const hoodBusinessUrl = 'http://localhost:8000/hood/business'; //filters business by neighbourhood

@Injectable({
  providedIn: 'root',
})
export class BusinessService {
  constructor(private http: HttpClient) {}

  getHoodBusinessData(id: any): Observable<any> {
    return this.http.get(`${hoodBusinessUrl}/${id}`);
  }

  getBusinessDetail(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  addBusiness(data: {
    business_name: string;
    business_email: string;
    about_business: string;
    neighbourhood: any;
  }) {
    return this.http.post(baseUrl, data);
  }

  updateBusiness(
    id: any,
    data: {
      business_name: string;
      business_email: string;
      about_business: string;
    }
  ) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deleteBusiness(id: any) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
