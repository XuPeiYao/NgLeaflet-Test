import { Component } from '@angular/core';
import { tileLayer, latLng, circle, polygon, marker, Map } from 'leaflet';
import { LeafletDirective } from '@asymmetrik/ngx-leaflet';
import * as L from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      })
    ],
    zoom: 5,
    center: latLng(22.7104955, 120.3078807)
  };

  layers = [
    circle([22.7104955, 120.3078807], { radius: 5000 }),
    marker([22.7104955, 120.3078807])
  ];

  constructor() {}

  onMapReady(map: Map) {
    // add a scale at at your map.
    const scale = L.control.scale().addTo(map);
  }
}
