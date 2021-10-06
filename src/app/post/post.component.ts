import { Component, OnInit } from '@angular/core';
import {PostService} from '../service/post.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

 text: string;
 title: string;

  constructor(private postService: PostService) {
  }
  ngOnInit(): void {
  this.title='';
  this.text='';
  }
  addPost(){
    this.postService.addPost({id: 0, title:this.title, text: this.text});
  }
}
