import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css',
})
export class MiniMapComponent {
  @Input() lngLat?: [number, number];
  @ViewChild('map') divMap?: ElementRef;

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    if (!this.divMap?.nativeElement) throw Error('No map div found');
    if (!this.lngLat) throw Error('No coords found');

    const map = new Map({
      accessToken:
        'pk.eyJ1IjoianNmYzIxOTkiLCJhIjoiY2x4eGtnczd4MmVuazJpcHRzdXdqcmh3ZSJ9.1ojpSPj3K7ubSwUr7rgeAw',
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 9, // starting zoom
      interactive: false,//para que no pueda usar el mapa y sea como una "imagen"
    });

    new Marker().setLngLat(this.lngLat).addTo(map);
  }
}
