import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/core/services/news.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { NewsAddDialogComponent } from 'src/app/ui/dialogs/news-add-dialog/news-add-dialog.component';
import { INews } from 'src/app/core/interfaces/news.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NewsEditDialogComponent } from 'src/app/ui/dialogs/news-edit-dialog/news-edit-dialog.component';
import { NewsDeleteDialogComponent } from 'src/app/ui/dialogs/news-delete-dialog/news-delete-dialog.component';
import { Profile } from 'src/app/core/models/profile.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  items$: Observable<INews[]>;
  topItems$: Observable<INews[]>;
  totalCount = 0;
  dialogWidth = '850px';
  protected isAuthed: Profile | null = null;
  constructor(
    private newsService: NewsService,
    private authService: AuthService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.authService.profile.subscribe(res => (this.isAuthed = res));
    this.loadData();
  }

  loadData() {
    this.items$ = this.newsService.fetchAll().pipe(
      map(data => {
        this.totalCount = data.totalCount;
        return data.items;
      })
    );
    this.topItems$ = this.newsService
      .fetchAll({ sort: 'revision', limit: 2 })
      .pipe(map(data => data.items));
  }

  openSnackbar(message = 'done!', action = 'close') {
    this.snackbar.open(message, action, {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 4000
    });
  }

  onAddNews() {
    // this.newsService
    //   .addNews({
    //     id: 3,
    //     title: 'title-5',
    //     slug: 'news-5',
    //     description: 'news description 5',
    //     text: 'news text 5',
    //     image: 'https://www.w3schools.com/howto/img_forest.jpg',
    //     createdAt: Date.now(),
    //     updatedAt: Date.now(),
    //     revision: 30
    //   })
    //   .subscribe(res => {
    //     console.log(res)
    //     this.loadData();
    //   });
    const dialog = this.dialog.open(NewsAddDialogComponent, {
      width: this.dialogWidth
    });

    dialog.afterClosed().subscribe(res => {
      if (res) {
        this.loadData();
        this.openSnackbar('Your news added!', 'good! close it!');
      }
    });
  }

  onEdit(slug: string) {
    const editDialog = this.dialog.open(NewsEditDialogComponent, {
      width: this.dialogWidth,
      data: { slug }
    });

    editDialog.afterClosed().subscribe((res: INews | false) => {
      if (res) {
        this.openSnackbar(`News "${res.title}" updated`);
      }
    });
  }

  onDelete(slug: string) {
    const deleteDialog = this.dialog.open(NewsDeleteDialogComponent, {
      width: '350px',
      data: { slug }
    });

    deleteDialog.afterClosed().subscribe((res: boolean) => {
      if (res) {
        this.openSnackbar('News deleted', 'fine!');
        this.loadData();
      }
    });
  }
}
