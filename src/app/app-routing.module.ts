import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  {
    path: 'examples/full-screen',
    loadChildren: () => import('./+pages/full-screen/full-screen.module').then( m => m.FullScreenPageModule)
  },
  {
    path: 'examples/scrollable',
    loadChildren: () => import('./+pages/scrollable/scrollable.module').then( m => m.ScrollablePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
