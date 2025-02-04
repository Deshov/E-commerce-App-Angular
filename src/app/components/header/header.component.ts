import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <div class="header">
      {{title()}}
</div>
  `,
  styles: `
  .header {
    background-color:rgba(0,0,0,0.4);
    color:black;
    padding: 10px;  
  }`,
})
export class HeaderComponent {
 title = signal('ecommerce app');
}
