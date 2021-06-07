import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BusinessService } from '../services/business-service/business.service';

@Component({
  selector: 'app-business-create',
  templateUrl: './business-create.component.html',
  styleUrls: ['./business-create.component.css'],
})
export class BusinessCreateComponent implements OnInit {
  myForm: FormGroup;

  constructor(private businessService: BusinessService) {}

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
    };

    this.businessService.addBusiness(data).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
