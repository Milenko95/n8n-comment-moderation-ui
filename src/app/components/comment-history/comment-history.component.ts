import { Component } from '@angular/core';
import { Comments } from 'src/app/models/comment.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-comment-history',
  templateUrl: './comment-history.component.html',
  styleUrls: ['./comment-history.component.scss']
})
export class CommentHistoryComponent {
  allComments: Comments[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadComments();
  }

  loadComments(): void {
    this.dataService.getAllComments().subscribe(
      (comments) => {
        // Initialize moderatedComments with the fetched comments, all set to false by default
        this.allComments = [...comments]
      },
      (error) => {
        console.error('Error loading comments', error);
      }
    );
  }


}