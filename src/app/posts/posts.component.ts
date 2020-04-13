import { NotFoundError } from './../common/not-found-error';
import { AppError } from 'src/app/common/app-error';
import { PostsService } from './../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { BadInput } from 'src/app/common/bad-input';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  constructor(private service: PostsService, private route: ActivatedRoute) {
  }

   ngOnInit() {
     this.route.paramMap.subscribe(params => {
        console.log(params);
     });

      this.service.getAll()
      .subscribe(posts => this.posts = (<any[]> posts));
   }

   createPost(input: HTMLInputElement) {
     const post = { title: input.value };
     this.posts.splice(0, 0, post);

     input.value = '';
     this.service.create(JSON.stringify(post))
          .subscribe(
            newPost => {
              post['id'] = newPost['id'];
              console.log(newPost);
          },
          (error: AppError) => {
            this.posts.splice(0, 1);
            if (error instanceof BadInput) {
              // alert('This Post has already been deleted.');
              console.log(error);
            } else {
              throw error;
            }
          });
   }

   updatePost(post) {
     this.service.update(post)
        .subscribe(
          updatedPost => {
            console.log(updatedPost);
        });
    //  this.http.put(this.url, JSON.stringify(post));
   }

   deletePost(post) {
    const index = this.posts.indexOf(post);
    this.posts = this.posts.filter(x => x !== post);
      this.service.delete(post.id)
      .subscribe(
        null,
        (error: AppError) => {
          this.posts = this.posts.splice(index, 0, post);
          if (error instanceof NotFoundError) {
            alert('This Post has already been deleted.');
            console.log(error);
          } else {
            throw error;
          }
      });
   }


}
