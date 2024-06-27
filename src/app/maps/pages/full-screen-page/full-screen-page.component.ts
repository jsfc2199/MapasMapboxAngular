import { Component, ElementRef, ViewChild } from '@angular/core';
import {Map} from 'mapbox-gl';

@Component({
  selector: 'app-full-screen-page',
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.css',
})
export class FullScreenPageComponent {
  //tomamos referencia a una parte del html
  @ViewChild('map') divMap?: ElementRef;

  //lo usamos aquí para esperar que todos los componentes hijos carguen
  ngAfterViewInit(): void {
    if (!this.divMap) throw Error('Map elemento required');

    //esta implementación funciona pero es herrada en función de lo que se quiere hacer
    const map = new Map({
      accessToken:
        'pk.eyJ1IjoianNmYzIxOTkiLCJhIjoiY2x4eGtnczd4MmVuazJpcHRzdXdqcmh3ZSJ9.1ojpSPj3K7ubSwUr7rgeAw',
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }
}
