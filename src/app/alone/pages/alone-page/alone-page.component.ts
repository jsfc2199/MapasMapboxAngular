import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

//sobrevive por si mismo sin tener que importarlo en un módulo
@Component({
  selector: 'app-alone-page',
  standalone: true, //lo que hace que sea independiente
  imports: [CommonModule],
  templateUrl: './alone-page.component.html',
})
export class AlonePageComponent {

}
