import { Injectable } from '@angular/core';
import {Question} from '../model/question';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<Question[]>{
    return this.http.get<Question[]>('http://localhost:8080/posts');
  }
  getQuestion(id:number): Observable<Question>{
    return this.http.get<Question>('http://localhost:8080/post/'+id);
  }
    addQuestion(question: Question): void {
      this.http.post<any>('http://localhost:8080/post', question).subscribe(data => {
            question.id = question.id;
        })
    }
    deleteQuestion(id: number){
     this.http.delete('http://localhost:8080/post/'+id).subscribe(status => console.log(status));
    }

}
