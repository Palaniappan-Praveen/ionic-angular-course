import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'oman',
    loadChildren: () => import('./oman/oman.module').then( m => m.OmanPageModule)
  },
  {
    path: 'india',
    loadChildren: () => import('./india/india.module').then( m => m.IndiaPageModule)
  },
  {
    path: 'singapore',
    loadChildren: () => import('./singapore/singapore.module').then( m => m.SingaporePageModule)
  },
  {
    path: 'thailand',
    loadChildren: () => import('./thailand/thailand.module').then( m => m.ThailandPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
