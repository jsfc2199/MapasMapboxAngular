import { Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'app-markes-page',
  templateUrl: './markes-page.component.html',
  styleUrl: './markes-page.component.css',
})
export class MarkesPageComponent {
  @ViewChild('map') divMap?: ElementRef;

  map?: Map;
  currentCenter: LngLat = new LngLat(-74.5, 40);

  ngAfterViewInit(): void {
    if (!this.divMap) throw Error('Map elemento required');
    this.map = new Map({
      accessToken:
        'pk.eyJ1IjoianNmYzIxOTkiLCJhIjoiY2x4eGtnczd4MmVuazJpcHRzdXdqcmh3ZSJ9.1ojpSPj3K7ubSwUr7rgeAw',
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentCenter, // starting position [lng, lat]
      zoom: 10, // starting zoom
    });

    //referencia de como crear un marcador
    // const markerHtml = document.createElement('div')
    // markerHtml.innerHTML = 'Juan'

    // const marker= new Marker({
    //   element: markerHtml
    // })
    // .setLngLat(this.currentCenter)
    // .addTo(this.map!)
  }
}
