import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  imports: [ HeaderComponent, ButtonModule ],
  template: `
    <app-header/> 
    <p-button label="Submit" />
 `,
  styles: [],
})
export class AppComponent {
  title = 'angular-ecomm';
}
