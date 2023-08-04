import { Component } from '@angular/core';
import { ForexConverterPipe } from './forexConverter.pipe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ForexConverterPipe]
})
export class AppComponent {
  fromCurrency: string = '1.126735';
  toCurrency: string = '1.126735';
  amount: string = '0';
  result: string|null|undefined;

  constructor(private forex: ForexConverterPipe){}

  /*convert() {
    this.result = this.forex.transform(this.amount,this.fromCurrency,this.toCurrency);
  }*/

  convert() {
    if(this.amount=='0'){
      this.result = this.forex.transform(this.amount,this.fromCurrency,this.toCurrency);
    }
    else{
      this.result = Number(this.amount) > 0 ? this.amount : null;
    }
    
  }
}

