import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { NewsService } from 'src/app/core/services/news.service';
import { merge, of } from 'rxjs';
import { startWith, switchMap, map, catchError, delay } from 'rxjs/operators';
import { INews } from 'src/app/core/interfaces/news.interface';

@Component({
  selector: 'app-news-statics',
  templateUrl: './news-statics.component.html',
  styleUrls: ['./news-statics.component.scss']
})
export class NewsStaticsComponent implements OnInit {
  displayedColumns: string[] = ['title', 'revision'];
  data: INews[] = [];
  limit = 2;
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    setTimeout(() => {
      this.sort.sortChange.subscribe(_ => (this.paginator.pageIndex = 0)); // back to first page

      merge(this.sort.sortChange, this.paginator.page)
        .pipe(
          startWith({}),
          switchMap(() => {
            this.isLoadingResults = true;
            return this.newsService.fetchAll({
              sort: this.sort.active,
              sortDirection: this.sort.direction,
              page: this.paginator.pageIndex,
              limit: this.limit
            });
          }),
          delay(500),
          map(data => {
            this.isLoadingResults = false;
            this.isRateLimitReached =
              (this.paginator.pageIndex + 1) * this.limit === data.totalCount;
            this.resultsLength = data.totalCount;
            return data.items;
          }),
          catchError(err => {
            console.log(err);
            return of([]);
          })
        )
        .subscribe(data => {
          this.data = data;
          console.log(this.data);
        });
    });
  }
}
