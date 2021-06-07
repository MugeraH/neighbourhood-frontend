import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';   
import { ToastrService } from 'ngx-toastr';


import { PostsService } from '../services/posts-service/posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent implements OnInit {
  myForm: FormGroup;
  constructor(
    private postService: PostsService,
    private router: ActivatedRoute,
    private redirect: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
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
      hood: this.router.snapshot.paramMap.get('id'),
    };

    this.postService.addPost(data).subscribe(
      (response) => {
        console.log(response);

        this.toastr.success('New Post saved successfully');
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
