import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsViewComponent } from './news-view.component';

const routes: Routes = [{ path: '', component: NewsViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsViewRoutingModule {}
