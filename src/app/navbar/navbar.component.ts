import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth-serivce/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  user;
  constructor(
    private authService: AuthService,
    private redirect: Router,
    private toastr: ToastrService
  ) {}

  getUser() {
    this.authService.getUser().subscribe((data) => {
      console.log(data);
    }); 
  }

  ngOnInit(): void {
    this.getUser();
  }
}
