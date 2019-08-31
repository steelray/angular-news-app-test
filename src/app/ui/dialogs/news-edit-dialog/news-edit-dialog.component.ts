import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewsService } from 'src/app/core/services/news.service';
import { INews, INewsError } from 'src/app/core/interfaces/news.interface';
import { News } from 'src/app/core/models/news.model';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { delay } from 'rxjs/operators';
@Component({
  selector: 'app-news-edit-dialog',
  templateUrl: './news-edit-dialog.component.html',
  styleUrls: ['./news-edit-dialog.component.scss']
})
export class NewsEditDialogComponent implements OnInit {
  news: INews;
  model: INews;
  Editor = ClassicEditor;
  isLoading = true;
  isSubmited = false;
  errors: INewsError;
  constructor(
    private dialogRef: MatDialogRef<NewsEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { slug: string },
    private newsService: NewsService
  ) {}

  ngOnInit() {
    this.newsService.fetchOne(this.data.slug).subscribe(res => {
      this.model = { ...res };
      this.isLoading = false;
    });
  }

  onSubmit(form) {
    // e.preventDefault();
    this.isSubmited = true;
    if (form.valid) {
      this.isLoading = true;
      const model = new News();
      model.load(this.model);
      this.newsService
        .updateNews(this.data.slug, model)
        .pipe(delay(1000))
        .subscribe((res: any) => {
          if (!res.errors) {
            this.dialogRef.close(res);
          } else {
            this.isLoading = false;
            this.errors = res.errors;
          }
        });
    }
  }
}
