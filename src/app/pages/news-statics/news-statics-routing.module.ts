import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsStaticsComponent } from './news-statics.component';

const routes: Routes = [{ path: '', component: NewsStaticsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsStaticsRoutingModule {}
