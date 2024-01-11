import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodePageComponent } from './ui/episode/episode-page/episode-page.component';
import { CharacterPageComponent } from './ui/character/character-page/character-page.component';

export const routes: Routes = [
    { path: '', component: CharacterPageComponent},
    { path: 'episode', component: EpisodePageComponent},
    { path: 'character', component: CharacterPageComponent },
    { path: '**', redirectTo: '/' }
  ]
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule {}