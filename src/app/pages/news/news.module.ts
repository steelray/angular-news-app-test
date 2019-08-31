import { NgModule } from '@angular/core';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { LayoutModule } from 'src/app/ui/layout/layout.module';
import { NewsCardModule } from 'src/app/ui/news-card/news-card.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NewsAddDialogModule } from 'src/app/ui/dialogs/news-add-dialog/news-add-dialog.module';
import { NewsAddDialogComponent } from 'src/app/ui/dialogs/news-add-dialog/news-add-dialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NewsEditDialogComponent } from 'src/app/ui/dialogs/news-edit-dialog/news-edit-dialog.component';
import { NewsDeleteDialogComponent } from 'src/app/ui/dialogs/news-delete-dialog/news-delete-dialog.component';
import { NewsEditDialogModule } from 'src/app/ui/dialogs/news-edit-dialog/news-edit-dialog.module';
import { NewsDeleteDialogModule } from 'src/app/ui/dialogs/news-delete-dialog/news-delete-dialog.module';
@NgModule({
  declarations: [NewsComponent],
  imports: [
    SharedModule,
    NewsRoutingModule,
    LayoutModule,
    NewsCardModule,
    MatButtonModule,
    MatDialogModule,
    NewsAddDialogModule,
    MatSnackBarModule,
    NewsEditDialogModule,
    NewsDeleteDialogModule
  ],
  entryComponents: [
    NewsAddDialogComponent,
    NewsEditDialogComponent,
    NewsDeleteDialogComponent
  ]
})
export class NewsModule {}
