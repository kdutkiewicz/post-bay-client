import { Injectable } from '@angular/core';
import {Post} from '../model/post';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

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
    return this.http.get<Post[]>('backend/getAllPosts');
    // return of(this.posts);
  }
}
