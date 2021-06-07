import { Component, OnInit } from '@angular/core';
import { HoodsService } from '../services/hood-service/hoods.service';
import { ActivatedRoute } from '@angular/router';
import { Hood } from '../interfaces/hood';

@Component({
  selector: 'app-hood-detail',
  templateUrl: './hood-detail.component.html',
  styleUrls: ['./hood-detail.component.css'],
})
export class HoodDetailComponent implements OnInit {
  id: any;
  hood: Hood;
  constructor(
    private hoodService: HoodsService,
    private router: ActivatedRoute
  ) {}



  viewHood() {
    this.id = this.router.snapshot.paramMap.get('id');
    this.hoodService.getHoodData(this.id).subscribe((data) => {
      this.hood = data;
    });
  }

  ngOnInit(): void {
    this.viewHood();
  }
}
