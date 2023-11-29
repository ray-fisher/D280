import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-world',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './world.component.html',
  styleUrl: './world.component.scss'
})
export class WorldComponent {
  name: any;
  capital: any;
  region: any;
  income: any;
  latitude: any;
  longitude: any;

  ngOnInit(): void {
    let countryInfo = document.querySelectorAll<SVGPathElement>('path');

    Array.prototype.forEach.call(countryInfo, (country: SVGPathElement) => {

      country.addEventListener('mouseover', (event:MouseEvent)=> {
        const path = event.target as SVGPathElement;
        path.style.fill = 'grey';
        this.getCountyInfo(country);
      });

      country.addEventListener('mouseleave', (event:MouseEvent)=> {
        const path = event.target as SVGPathElement;
        path.style.fill = '';
      });
    });
  }

  async getCountyInfo(country: SVGPathElement){
    let api: string = 'https://api.worldbank.org/V2/country/'+country.id+'?format=json';
    let response: Response = await fetch(api);
    let data: any =  await response.json();
    let dataPath: any = data[1];
    
    this.name = dataPath[0].name;
    this.capital = dataPath[0].capitalCity;
    this.region = dataPath[0].region.value;
    this.income = dataPath[0].incomeLevel.value;
    this.longitude = dataPath[0].longitude;
    this.latitude = dataPath[0].latitude;

  }
}
