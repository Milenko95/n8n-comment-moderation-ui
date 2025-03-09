import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { Comments } from '../models/comment.interface';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = environment.apiUrl;


  constructor(private http: HttpClient) { }

  // moderation
  getCommentsForModeration(): Observable<Comments[]> {
    return this.http.get<Comments[]>(`${this.apiUrl}/flagged-comments`);
  }

  saveModeratedComments(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/moderation-decision`, data);
  }

  // moderation history
  getAllModerationDecisions(): Observable<Comments[]> {
    return this.http.get<Comments[]>(`${this.apiUrl}/all-moderation-decisions`);
  }

  // comment history
  getAllComments(): Observable<Comments[]> {
    return this.http.get<Comments[]>(`${this.apiUrl}/all-comments`);
  }
}
