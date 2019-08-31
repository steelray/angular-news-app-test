import { NgModule } from '@angular/core';
import { NewsAddDialogComponent } from './news-add-dialog.component';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@NgModule({
  declarations: [NewsAddDialogComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CKEditorModule,
    MatProgressSpinnerModule
  ],
  exports: [NewsAddDialogComponent]
})
export class NewsAddDialogModule {}
