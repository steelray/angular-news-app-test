import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsStaticsRoutingModule } from './news-statics-routing.module';
import { NewsStaticsComponent } from './news-statics.component';
import { LayoutModule } from 'src/app/ui/layout/layout.module';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@NgModule({
  declarations: [NewsStaticsComponent],
  imports: [
    CommonModule,
    NewsStaticsRoutingModule,
    LayoutModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ]
})
export class NewsStaticsModule {}
