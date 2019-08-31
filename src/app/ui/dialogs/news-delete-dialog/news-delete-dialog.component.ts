import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { INews } from 'src/app/core/interfaces/news.interface';
import { NewsService } from 'src/app/core/services/news.service';
import { delay } from 'q';

@Component({
  selector: 'app-news-delete-dialog',
  templateUrl: './news-delete-dialog.component.html',
  styleUrls: ['./news-delete-dialog.component.scss']
})
export class NewsDeleteDialogComponent {
  isLoading = false;
  constructor(
    private dialogRef: MatDialogRef<NewsDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { slug: string },
    private newsService: NewsService
  ) {}

  onConfirm(confirm: boolean) {
    if (confirm) {
      this.isLoading = true;
      this.newsService
        .deleteNews(this.data.slug)
        .subscribe(res => this.dialogRef.close(res));
    } else {
      this.dialogRef.close();
    }
  }
}
