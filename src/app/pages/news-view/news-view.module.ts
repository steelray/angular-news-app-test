import { NgModule } from '@angular/core';

import { NewsViewRoutingModule } from './news-view-routing.module';
import { NewsViewComponent } from './news-view.component';
import { LayoutModule } from 'src/app/ui/layout/layout.module';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { SafePipeModule } from 'src/app/core/pipes/safe/safe-pipe.module';

@NgModule({
  declarations: [NewsViewComponent],
  imports: [SharedModule, NewsViewRoutingModule, LayoutModule, SafePipeModule]
})
export class NewsViewModule {}
