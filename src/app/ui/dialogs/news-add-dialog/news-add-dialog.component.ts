import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { MatDialogRef } from '@angular/material/dialog';
import { INewsError } from 'src/app/core/interfaces/news.interface';
import { News } from 'src/app/core/models/news.model';
import { NewsService } from 'src/app/core/services/news.service';
import { transformToSlug } from 'src/app/core/utilities/helpers';

@Component({
  selector: 'app-news-add-dialog',
  templateUrl: './news-add-dialog.component.html',
  styleUrls: ['./news-add-dialog.component.scss']
})
export class NewsAddDialogComponent implements OnInit {
  form: FormGroup;
  imagePattern = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  urlPattern = '^[a-z0-9_-]{3,125}$';
  Editor = ClassicEditor;
  isLoading = false;
  isSubmited = false;
  errors: INewsError;
  constructor(
    private fb: FormBuilder,
    private newsService: NewsService,
    private dialogRef: MatDialogRef<NewsAddDialogComponent>
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(125)
        ]
      ],
      slug: [
        '',
        [
          Validators.pattern(this.urlPattern),
          Validators.minLength(3),
          Validators.maxLength(125)
        ]
      ],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(25),
          Validators.maxLength(255)
        ]
      ],
      text: ['', [Validators.required, Validators.minLength(50)]],
      image: ['', [Validators.required, Validators.pattern(this.imagePattern)]]
    });
  }

  get title() {
    return this.form.get('title');
  }
  get slug() {
    return this.form.get('slug');
  }
  get image() {
    return this.form.get('image');
  }
  get description() {
    return this.form.get('description');
  }
  get text() {
    return this.form.get('text');
  }

  setSlug(str: string) {
    if (!this.slug.value) {
      this.slug.setValue(transformToSlug(str));
    }
  }

  onSubmit() {
    this.isSubmited = true;
    if (this.form.invalid) {
      return false;
    }

    const model = new News();
    model.load(this.form.value);
    this.newsService.addNews(model).subscribe((res: any) => {
      if (!res.errors) {
        this.dialogRef.close(res);
      } else {
        this.isLoading = false;
        this.errors = res.errors;
      }
    });
  }
}
