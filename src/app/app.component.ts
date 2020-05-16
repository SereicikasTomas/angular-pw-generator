import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  length = 0;
  password = '';
  useLetters = false;
  useNumbers = false;
  useSymbols = false;

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) this.length = parsedValue;
  }

  onChangeUseLetters() {
    this.useLetters = !this.useLetters;
  }

  onChangeUseNumbers() {
    this.useNumbers = !this.useNumbers;
  }

  onChangeUseSymbols() {
    this.useSymbols = !this.useSymbols;
  }

  onButtonClick() {
    console.log(this.useLetters, this.useNumbers, this.useSymbols);
    this.password = 'New psw';
  }
}
