import { NgModule } from '@angular/core';
import { NewsEditDialogComponent } from './news-edit-dialog.component';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@NgModule({
  declarations: [NewsEditDialogComponent],
  imports: [
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    CKEditorModule,
    MatProgressSpinnerModule
  ],
  exports: [NewsEditDialogComponent]
})
export class NewsEditDialogModule {}
