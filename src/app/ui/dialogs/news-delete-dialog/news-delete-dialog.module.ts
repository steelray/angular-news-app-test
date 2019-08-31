import { NgModule } from '@angular/core';
import { NewsDeleteDialogComponent } from './news-delete-dialog.component';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [NewsDeleteDialogComponent],
  imports: [SharedModule, MatButtonModule],
  exports: [NewsDeleteDialogComponent]
})
export class NewsDeleteDialogModule {}
