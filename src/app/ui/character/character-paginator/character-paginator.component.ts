import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Info } from '../../../domain/character/domain/character.model';

@Component({
  selector: 'app-character-paginator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-paginator.component.html',
  styleUrls: ['./character-paginator.component.scss']
})
export class CharacterPaginatorComponent {
@Input() informationPage?: Info;
  
paginasArray:number[] = []



ngOnInit() {
  console.log('infoPage' ,this.informationPage);
  const count = this.informationPage?.count || 0; // Asegúrate de que count sea un número
  this.paginasArray = Array.from({ length: count }, (_, i) => i + 1);
}
}
