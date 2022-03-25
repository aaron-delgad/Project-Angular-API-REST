import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',redirectTo:'web',pathMatch:'full'
  },
  {
    path: 'web',
    loadChildren:() => import('./modules/sites/sites.module').then(m => m.SitesModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRouting { }
