import {Component, OnInit} from '@angular/core';
import {Question} from '../model/question';
import {QuestionService} from '../service/question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questions: Question[];

  constructor(private questionService: QuestionService) {
  }

  ngOnInit(): void {
   this.getAllQuestions();
  }

  getAllQuestions(): void {
    this.questionService.getQuestions().subscribe(response => this.questions = response);
  }
  deleteQuestion(id: number){
    this.questionService.deleteQuestion(id);
  }


}
