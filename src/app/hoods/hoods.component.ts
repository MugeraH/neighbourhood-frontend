import { Component, OnInit } from '@angular/core';
import { HoodsService } from '../services/hood-service/hoods.service';
import {Hood} from '../interfaces/hood'

@Component({
  selector: 'app-hoods',
  templateUrl: './hoods.component.html',
  styleUrls: ['./hoods.component.css'],
})
export class HoodsComponent implements OnInit {
  hoods:Hood[] = [];

  constructor(private hoodsService: HoodsService) {}

  getHoods() {
    this.hoodsService.getHoodsData().subscribe((data) => {
      this.hoods = data;
      console.log(this.hoods);
    });
  }

  ngOnInit(): void {
    this.getHoods();
  }
}
