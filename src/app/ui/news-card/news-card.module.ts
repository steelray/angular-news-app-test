import { NgModule } from '@angular/core';
import { NewsCardComponent } from './news-card.component';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
@NgModule({
  declarations: [NewsCardComponent],
  imports: [SharedModule, MatIconModule, MatTooltipModule],
  exports: [NewsCardComponent]
})
export class NewsCardModule {}
