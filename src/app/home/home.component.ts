import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth-serivce/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Emmiters } from '../emmiters/emmiters';

import { User } from '../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user;

  constructor(
    private authService: AuthService,
    private redirect: Router,
    private toastr: ToastrService
  ) {}

  getUser() {
    this.authService.getUser().subscribe(
      (data) => {
        if (data) {
          this.user = data;
          // this.toastr.success('Login successfull');
          // this.toastr.success(`Welcome ${this.user.username}`);

          Emmiters.authEmmiter.emit(true);
          console.log(data);
        }
      },
      (error) => {
        console.log(error);
        Emmiters.authEmmiter.emit(false);
        this.toastr.error('Your are not logged in');
      }
    );
  }

  ngOnInit(): void {
    this.getUser();
  }
}
