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
  communicationCount: number;
  probeCount: number;
  positioningCount: number;
  spaceStationCount: number;
  telescopeCount: number;
  spaceDebrisCount: number;
  
  
  constructor() { 
    
  }

  ngOnInit() {
  }

  countSpaceDebris(): number   {
    this.spaceDebrisCount = 0;
    for(let i=0; i < this.satellites.length; i++) {
      if (this.satellites[i].type.toLowerCase() === 'space debris') {
        this.spaceDebrisCount += 1;
      }
    }
    return this.spaceDebrisCount;
  }
  
  countCommunication(): number {
    this.communicationCount = 0;
    for(let i=0; i < this.satellites.length; i++) {
      if (this.satellites[i].type.toLowerCase() === 'communication') {
        this.communicationCount += 1;
      }
    }
    return this.communicationCount;
  }

  countProbe(): number {
    this.probeCount = 0;
    for(let i=0; i < this.satellites.length; i++) {
      if (this.satellites[i].type.toLowerCase() === 'probe') {
        this.probeCount += 1;
      }
    }
    return this.probeCount;
  }

  countPositioning(): number {
    this.positioningCount = 0;
    for(let i=0; i < this.satellites.length; i++) {
      if (this.satellites[i].type.toLowerCase() === 'positioning') {
        this.positioningCount += 1;
      }
    }
    return this.positioningCount;
  }

  countSpaceStation(): number {
    this.spaceStationCount = 0;
    for(let i=0; i < this.satellites.length; i++) {
      if (this.satellites[i].type.toLowerCase() === 'space station') {
        this.spaceStationCount += 1;
      }
    }
    return this.spaceStationCount;
  }

  countTelescope(): number {
    this.telescopeCount = 0;
    for(let i=0; i < this.satellites.length; i++) {
      if (this.satellites[i].type.toLowerCase() === 'telescope') {
        this.telescopeCount += 1;
      }
    }
    return this.telescopeCount;
  }

}
