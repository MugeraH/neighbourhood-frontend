import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Input} from '@angular/core'
 

import { BusinessService } from '../services/business-service/business.service';
import { Business } from '../interfaces/business';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css'],
})
export class BusinessComponent implements OnInit {
  @Input() hood;
  id: any;
  businesses: Business[];
  constructor(
    private businessService: BusinessService,
    private router: ActivatedRoute
  ) {}

  getHoodBusinesses() {
    this.id = this.router.snapshot.paramMap.get('id');
    this.businessService.getHoodBusinessData(this.id).subscribe((data) => {
      this.businesses = data;
    });
  }

  ngOnInit(): void {
    this.getHoodBusinesses();
  }
}
