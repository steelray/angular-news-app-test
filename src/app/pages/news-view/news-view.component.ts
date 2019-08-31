import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsService } from 'src/app/core/services/news.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { INews } from 'src/app/core/interfaces/news.interface';

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.scss']
})
export class NewsViewComponent implements OnInit, OnDestroy {
  news: INews;
  sub = new Subscription();
  slug: string;
  constructor(
    private newsService: NewsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.slug = this.activatedRoute.snapshot.paramMap.get('slug');
    this.sub = this.newsService.fetchOne(this.slug).subscribe(
      res => {
        if (!res) {
          this.router.navigateByUrl('**', { skipLocationChange: true });
          return;
        }
        this.news = res;
        this.newsService.updateNews(this.news.slug, {
          revision: this.news.revision + 1
        });
      },
      err => {
        console.log(err);
      }
    );
  }
  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
