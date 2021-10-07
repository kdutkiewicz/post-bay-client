import { Component, OnInit } from '@angular/core';
import { QuestionService} from '../service/question.service';
import { ActivatedRoute } from '@angular/router';
import {Category} from '../model/category';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

 answer: string;
 content: string;
 id: number;
 category: Category;
 addingNewQuestion = true;

  constructor(private questionService: QuestionService, private route : ActivatedRoute) {
  }

  ngOnInit(): void {
    if (this.route.snapshot.params.id) {
      this.questionService.getQuestion(this.route.snapshot.params.id).subscribe( response => {
          this.answer = response.answer;
          this.content = response.content;
          this.id = response.id;
      });
      this.addingNewQuestion = false;
    } else {
      this.content='';
      this.answer='';
      this.id = 0;
      this.addingNewQuestion = true;
    }
  }

  savePost(){
    this.questionService.addQuestion({id: this.id, content:this.content, answer: this.answer, category: this.category});
  }
}
