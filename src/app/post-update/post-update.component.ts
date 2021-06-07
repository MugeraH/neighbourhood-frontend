import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PostsService } from '../services/posts-service/posts.service';

import { Posts } from '../interfaces/posts';

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.css'],
})
export class PostUpdateComponent implements OnInit {
  id: any;
  post: Posts;
  myForm: FormGroup;
  constructor(
    private postService: PostsService,
    private router: ActivatedRoute,
    private redirect: Router,
    private toastr: ToastrService
  ) {}

  getPost() {
    this.id = this.router.snapshot.paramMap.get('id');
    this.postService.getPost(this.id).subscribe((data) => {
      this.post = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.getPost();
    this.myForm = new FormGroup({
      title: new FormControl(''),
      post: new FormControl(''),
    });
  }

  get f() {
    return this.myForm.controls;
  }
  onSubmit() {
    const data = {
      title: this.f.title.value,
      post: this.f.post.value,
    };
    (this.id = this.router.snapshot.paramMap.get('id')),
      this.postService.updatePost(this.id, data).subscribe(
        (response) => {
          console.log(response);

          this.toastr.success('New Post updated successfully');
          this.redirect.navigate(['/hood', this.post.hood]);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
