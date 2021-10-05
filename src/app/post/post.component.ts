import { Component, OnInit } from '@angular/core';
import {PostService} from '../service/post.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postService: PostService) {
  }
  ngOnInit(): void {
  }
  addPost(){
    this.postService.addPost({id: 0, title:'Tytul 3', text: 'oisjfpoidjsifj pjfdspjf fmieon ofij'});
  }
}
