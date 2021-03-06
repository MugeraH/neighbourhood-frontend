import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BusinessService } from '../services/business-service/business.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-business-create',
  templateUrl: './business-create.component.html',
  styleUrls: ['./business-create.component.css'],
})
export class BusinessCreateComponent implements OnInit {
  myForm: FormGroup;

  constructor(
    private businessService: BusinessService,
    private router: ActivatedRoute,
    private redirect: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      business_name: new FormControl(''),
      business_email: new FormControl(''),
      about_business: new FormControl(''),
    });
  }

  get f() {
    return this.myForm.controls;
  }

  onSubmit() {
    const data = {
      business_name: this.f.business_name.value,
      business_email: this.f.business_email.value,
      about_business: this.f.about_business.value,
      neighbourhood: this.router.snapshot.paramMap.get('id'),
    };

    this.businessService.addBusiness(data).subscribe(
      (response) => {
        console.log(response);

        this.toastr.success('New Business saved successfully');
        this.redirect.navigate([
          '/hood',
          this.router.snapshot.paramMap.get('id'),
        ]);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
