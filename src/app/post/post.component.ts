import { Component, OnInit } from '@angular/core';
import {PostService} from '../service/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

 text: string;
 title: string;
 id: number;
 addingNewPost = true;

  constructor(private postService: PostService, private route : ActivatedRoute) {
  }

  ngOnInit(): void {
    if (this.route.snapshot.params.id) {
      this.postService.getPost(this.route.snapshot.params.id).subscribe( response => {
          this.text = response.text;
          this.title = response.title;
          this.id = response.id;
      });
      this.addingNewPost = false;
    } else {
      this.title='';
      this.text='';
      this.id = 0;
      this.addingNewPost = true;
    }
  }

  savePost(){
    this.postService.addPost({id: this.id, title:this.title, text: this.text});
  }
}
