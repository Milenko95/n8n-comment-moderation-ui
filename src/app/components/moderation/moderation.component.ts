import { Component } from '@angular/core';
import { Comments } from 'src/app/models/comment.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-moderation',
  templateUrl: './moderation.component.html',
  styleUrls: ['./moderation.component.scss'],
})
export class ModerationComponent {
  flaggedComments: Comments[] = [];
  moderatedComments: Comments[] = [];
  moderationsSaved = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadComments();
  }

  loadComments(): void {
    this.dataService.getCommentsForModeration().subscribe(
      (comments) => {
        console.log('comments', comments);
        
        this.flaggedComments = comments;
        // Initialize moderatedComments with the fetched comments, all set to false by default
        this.moderatedComments = this.flaggedComments.map((comment) => ({
          id: comment.id,
          user: comment.user ? comment.user : "",
          comment: comment.comment,
          approved: false, // Default approval is false
        }));
      },
      (error) => {
        console.error('Error loading comments', error);
      }
    );
  }

  submitModeration(): void {
    // Send the moderated comments to the server
    this.dataService.saveModeratedComments(this.moderatedComments).subscribe(
      (response) => {
        this.moderationsSaved = true;
        console.log('Successfully submitted moderation data:', response);
      },
      (error) => {
        console.error('Error submitting moderation data:', error);
      }
    );
  }
}
