import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import( './tabs/tabs.module' ).then( m => m.TabsPageModule ),
    canActivate:[UserGuard]
  },
  {
    path: 'intro',
    loadChildren: () => import( './intro/intro.module' ).then( m => m.IntroPageModule ),
  
  },
  {
    path: 'questionnaire',
    loadChildren: () => import('./questionnaire/questionnaire.module').then( m => m.QuestionnairePageModule)
  },
  {
    path: 'statistics',
    loadChildren: () => import( './statistics/statistics.module' ).then( m => m.StatisticsPageModule ),
    canActivate: [ UserGuard ]
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
