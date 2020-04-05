import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';
import { getNumberOfCurrencyDigits } from '@angular/common';


@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  
  satelliteTypes: string[] = ['Space Debris', 'Communication', 'Probe', 'Positioning', 'Space Station', 'Telescope']
  
  constructor() { 
    
  }

  ngOnInit() {
    
  }

  typeCount(nameOfType: string): number {
    let typeCount = 0;
    for(let i=0; i < this.satellites.length; i++) {
      if (this.satellites[i].type.toLowerCase() === nameOfType.toLowerCase()) {
        typeCount += 1;
      }
    }
    return typeCount;
  }

}
