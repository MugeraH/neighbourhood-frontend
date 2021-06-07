import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

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
    private router: ActivatedRoute,
    private redirect: Router,
    private toastr: ToastrService
  ) {}

  getHoodBusinesses() {
    this.id = this.router.snapshot.paramMap.get('id');
    this.businessService.getHoodBusinessData(this.id).subscribe((data) => {
      this.businesses = data;
    });
  }

  deleteSelectedBusiness(id: any) {
    this.businessService.deleteBusiness(id).subscribe((data) => {});

    this.getHoodBusinesses();

    this.toastr.error('New Post deleted successfully');
    this.redirect.navigate(['/hood', this.router.snapshot.paramMap.get('id')]);
  }

  ngOnInit(): void {
    this.getHoodBusinesses();
  }
}
