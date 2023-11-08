import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [],
})
export class ByCapitalPageComponent {
  public capitals: Country[] = [];
  public nameCapital: string = 'capital';

  constructor(private countriesService: CountriesService) {}

  searchByCapital(term: string): void {
    this.countriesService.searchCapital(term).subscribe((capitals) => {
      this.capitals = capitals;
    });
  }
}
