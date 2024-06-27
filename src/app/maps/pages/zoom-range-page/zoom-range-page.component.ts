import { Component, ElementRef, ViewChild } from '@angular/core';
import {LngLat, Map} from 'mapbox-gl'
@Component({
  selector: 'app-zoom-range-page',
  templateUrl: './zoom-range-page.component.html',
  styleUrl: './zoom-range-page.component.css'
})
export class ZoomRangePageComponent {

  @ViewChild('map') divMap?: ElementRef;

  zoom = 10
  map?: Map;
  currentCenter: LngLat = new LngLat(-74.5, 40)

  //lo usamos aquí para esperar que todos los componentes hijos carguen
  ngAfterViewInit(): void {
    if (!this.divMap) throw Error('Map elemento required');
    this.map = new Map({
      accessToken:
        'pk.eyJ1IjoianNmYzIxOTkiLCJhIjoiY2x4eGtnczd4MmVuazJpcHRzdXdqcmh3ZSJ9.1ojpSPj3K7ubSwUr7rgeAw',
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentCenter, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });

    this.mapListeners()
  }

  mapListeners(){
    if(!this.map)  throw Error('Map elemento required');

    this.map.on('zoom', (z) => {
      this.zoom = this.map!.getZoom()
    })

    this.map.on('zoomend', (z) => {
      if(this.map!.getZoom()< 18) return
      this.map!.zoomTo(18)
    })

    this.map.on('moveend', (z) => {
      this.currentCenter = this.map!.getCenter()
    })


  }

  zoomIn(){
    this.map?.zoomIn()
  }
  zoomOut(){
    this.map?.zoomOut()

  }

  zoomChanged(value: string){
    this.zoom = +value;
    this.map!.zoomTo(this.zoom)
  }

  ngOnDestroy(): void {
    // Como funcionan como observables mas o menos, debemos limpiar los listeners
    this.map?.remove()
  }
}
