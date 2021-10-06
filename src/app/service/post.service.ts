import { Injectable } from '@angular/core';
import {Post} from '../model/post';
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
export class PostService {

  posts: Post[] = [
    {id: 1, title: 'Tytul 1', text: 'tresc posta'},
    {id: 2, title: 'Tytul 2', text: 'tresc nastepnego posta'},
    {id: 3, title: 'Tytul 3', text: 'oisjfpoidjsifj pjfdspjf fmieon ofij'}
  ];

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>('http://localhost:8080/posts');
    return of(this.posts);
  }
    addPost(post: Post): void {
      this.http.post<any>('http://localhost:8080/post', post).subscribe(data => {
            post.id = data.id;
        })
    }
    deletePost(id: number){
     this.http.delete('http://localhost:8080/post/'+id).subscribe(status => console.log(status));
    }

}
