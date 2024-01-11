import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterPageComponent } from './ui/character/character-page/character-page.component';
import { NavBarComponent } from './ui/nav-bar/nav-bar.component';
import { EpisodePageComponent } from './ui/episode/episode-page/episode-page.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CharacterPageComponent, NavBarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chileAutos';
}
