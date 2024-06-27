import { Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

interface MarkerColor {
  color: string;
  marker: Marker;
}

interface PlainMarker {
  color: string;
  lngLat: number[];
}
@Component({
  selector: 'app-markes-page',
  templateUrl: './markes-page.component.html',
  styleUrl: './markes-page.component.css',
})
export class MarkesPageComponent {
  @ViewChild('map') divMap?: ElementRef;

  map?: Map;
  currentCenter: LngLat = new LngLat(-74.5, 40);
  currentMarkers: MarkerColor[] = [];

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

    this.readFromLocalStorage()

    //referencia de como crear un marcador
    // const markerHtml = document.createElement('div')
    // markerHtml.innerHTML = 'Juan'

    // const marker= new Marker({
    //   element: markerHtml
    // })
    // .setLngLat(this.currentCenter)
    // .addTo(this.map!)
  }

  createMarker() {
    if (!this.map) return;
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    ); //hexagesimal de manra aleatoria
    const lngLat = this.map.getCenter();
    this.addMarker(lngLat, color);
  }

  addMarker(lngLat: LngLat, color: string) {
    if (!this.map) return;

    const marker = new Marker({
      color: color,
      draggable: true, //propiedad que permite mover el marcador
    })
      .setLngLat(lngLat)
      .addTo(this.map);

    this.currentMarkers.push({
      color,
      marker,
    });

    this.saveToLocalStorage();

    marker.on('dragend',() => this.saveToLocalStorage()) //actualizamos el guardado de las coordenadas
  }

  deleteMarker(i: number) {
    this.currentMarkers[i].marker.remove();
    this.currentMarkers.splice(i, 1);
  }

  flyTo(marker: Marker) {
    this.map?.flyTo({
      zoom: 14,
      center: marker.getLngLat(),
    });
  }

  saveToLocalStorage() {
    const plainMarkers: PlainMarker[] = this.currentMarkers.map(
      ({ color, marker }) => {
        return {
          color,
          lngLat: marker.getLngLat().toArray(),
        };
      }
    );

    localStorage.setItem('plainMarkers', JSON.stringify(plainMarkers));
  }

  readFromLocalStorage() {
    const plainMarkersString = localStorage.getItem('plainMarkers') ?? '[]'
    const plainMarkers: PlainMarker[] = JSON.parse(plainMarkersString)

    plainMarkers.forEach(({color, lngLat}) => {
      const [lng, lat] = lngLat
      const coords = new LngLat(lng,lat)

      this.addMarker(coords, color)
    })
  }
}
