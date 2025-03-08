import { Component } from '@angular/core';
import { Comments } from 'src/app/models/comment.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-moderation-history',
  templateUrl: './moderation-history.component.html',
  styleUrls: ['./moderation-history.component.scss'],
})
export class ModerationHistoryComponent {
  moderationDecisions: Comments[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadComments();
  }

  loadComments(): void {
    this.dataService.getAllModerationDecisions().subscribe(
      (comments) => {
        // Initialize moderatedComments with the fetched comments, all set to false by default
        this.moderationDecisions = [...comments];
      },
      (error) => {
        console.error('Error loading decisions', error);
      }
    );
  }
}
