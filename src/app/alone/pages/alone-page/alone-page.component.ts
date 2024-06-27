import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CounterAloneComponent } from '../../components/counter-alone/counter-alone.component';

//sobrevive por si mismo sin tener que importarlo en un módulo
@Component({
  selector: 'app-alone-page',
  standalone: true, //lo que hace que sea independiente
  imports: [CommonModule, CounterAloneComponent ], //LO IMPORTAMOS EL COMPONENTE DIRECTAMENTE
  templateUrl: './alone-page.component.html',
})
export class AlonePageComponent {

}
