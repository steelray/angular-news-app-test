import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from './core/services/auth-guard.service';
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'news',
    loadChildren: () =>
      import('./pages/news/news.module').then(m => m.NewsModule)
  },
  {
    path: 'news/:slug',
    loadChildren: () =>
      import('./pages/news-view/news-view.module').then(m => m.NewsViewModule)
  },
  {
    path: 'news-statics',
    loadChildren: () =>
      import('./pages/news-statics/news-statics.module').then(
        m => m.NewsStaticsModule
      ),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
