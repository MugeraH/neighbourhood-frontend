import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth-serivce/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Emmiters } from '../emmiters/emmiters';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isAuthenticated: boolean = false;
  constructor(
    private authService: AuthService,
    private redirect: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    Emmiters.authEmmiter.subscribe((auth: boolean) => {
      this.isAuthenticated = auth;
    });
  }

  logout(): void {
    this.authService.logout().subscribe(() => {
      // this.toastr.success('Logout successfull');
      // this.redirect.navigate(['login']);
      // window.location.reload();
      this.isAuthenticated = false;
    });
  }
}
