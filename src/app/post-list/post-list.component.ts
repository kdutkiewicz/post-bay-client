import {Component, OnInit} from '@angular/core';
import {Post} from '../model/post';
import {PostService} from '../service/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
   this.getAllPosts();
  }

  getAllPosts(): void {
    this.postService.getPosts().subscribe(response => this.posts = response);
  }
  deletePost(id: number){
    this.postService.deletePost(id);
//     this.ngOnInit();
  }
}
