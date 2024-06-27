import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkesPageComponent } from './pages/markes-page/markes-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';

import * as mapboxgl from 'mapbox-gl';
import { CounterAloneComponent } from '../alone/components/counter-alone/counter-alone.component';

@NgModule({
  declarations: [
    MiniMapComponent,
    SideMenuComponent,
    MapsLayoutComponent,
    FullScreenPageComponent,
    MarkesPageComponent,
    PropertiesPageComponent,
    ZoomRangePageComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    CounterAloneComponent //los standalone van en los imports, no en las declaraciones, cuando se usan módulos standard
  ]
})
export class MapsModule { }
