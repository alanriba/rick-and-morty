import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { CharacterPaginatorComponent } from '../character-paginator/character-paginator.component';
import { Result, Info } from '../../../domain/character/domain/character.model';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule, CharacterPaginatorComponent],
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {
  @Input() characters?: Result[];
  @Input() informationPage?: Info;

  onInit():void {
    console.log('infoPage1' ,this.informationPage);
  }

  getBadgeStatusColor(character: string): string {
    switch (character) {
      case 'Alive':
        return 'bg-green-100 text-green-800  dark:text-green-400 border-green-400'
      case 'Dead':
        return 'bg-red-100 text-red-800  dark:text-red-400 border-red-400'
      default:
        return 'bg-yellow-100 text-yellow-800  dark:text-yellow-400 border-yellow-400'
    }
  }
}
