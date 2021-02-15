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
    loadChildren: () => import( './start/start.module' ).then( m => m.StartPageModule ),
  
  },
  {
    path: 'questionaire',
    loadChildren: () => import('./questionaire/questionaire.module').then( m => m.QuestionairePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
