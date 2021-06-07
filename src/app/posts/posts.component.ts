import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';  
import { Input } from '@angular/core';
import { Posts } from '../interfaces/posts';
import { ToastrService } from 'ngx-toastr';

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
    private router: ActivatedRoute,
    private redirect: Router,
    private toastr: ToastrService
  ) {}

  getHoodPosts() {
    this.id = this.router.snapshot.paramMap.get('id');
    this.postService.getHoodPosts(this.id).subscribe((data) => {
      this.posts = data;
    });
  }

  deleteSelectedPost(id: any) {
    this.postService.deletePost(id).subscribe((data) => {});
    this.getHoodPosts();

    this.toastr.error('New Post deleted successfully');
    this.redirect.navigate(['/hood', this.router.snapshot.paramMap.get('id')]);
  }

  ngOnInit(): void {
    this.getHoodPosts();
  }
}
