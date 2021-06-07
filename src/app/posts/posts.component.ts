import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Input } from '@angular/core';
import { Posts } from '../interfaces/posts';

import { PostsService } from '../services/posts-service/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  @Input() hood;
  id: any;
  posts: Posts[];
  constructor(
    private postService: PostsService,
    private router: ActivatedRoute
  ) {}

  getHoodPosts() {
    this.id = this.router.snapshot.paramMap.get('id');
    this.postService.getHoodPosts(this.id).subscribe((data) => {
      this.posts = data;
    });
  }

  // deleteSelectedBusiness(id: any) {
  //   this.businessService.deleteBusiness(id).subscribe((data) => {
  //     console.log(data);
  //   });
  // }

  ngOnInit(): void {
    this.getHoodPosts();
  }
}
