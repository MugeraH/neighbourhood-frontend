import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BusinessService } from '../services/business-service/business.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Business } from '../interfaces/business';

@Component({
  selector: 'app-business-update',
  templateUrl: './business-update.component.html',
  styleUrls: ['./business-update.component.css'],
})
export class BusinessUpdateComponent implements OnInit {
  myForm: FormGroup;
  id: any;
  business: Business;
  constructor(
    private businessService: BusinessService,
    private router: ActivatedRoute,
    private redirect: Router,
    private toastr: ToastrService
  ) {}

  getBusiness() {
    this.id = this.router.snapshot.paramMap.get('id');
    this.businessService.getBusinessDetail(this.id).subscribe((data) => {
      this.business = data;
      console.log(data);
    });
  }

  get f() {
    return this.myForm.controls;
  }

  ngOnInit(): void {
    this.getBusiness();

    this.myForm = new FormGroup({
      business_name: new FormControl(''),
      business_email: new FormControl(''),
      about_business: new FormControl(''),
    });
  }

  onSubmit() {
    const data = {
      business_name: this.f.business_name.value,
      business_email: this.f.business_email.value,
      about_business: this.f.about_business.value,
    };
    (this.id = this.router.snapshot.paramMap.get('id')),
      this.businessService.updateBusiness(this.id, data).subscribe(
        (response) => {
          console.log(response);

          this.toastr.success('New Business updated successfully');
          this.redirect.navigate(['/hood', this.business.neighbourhood]);
        },
        (error) => {
          console.log(error);
        }
      );
  }

 
}
