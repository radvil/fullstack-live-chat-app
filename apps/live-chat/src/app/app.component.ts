import { Component } from '@angular/core';
import { TestService } from '@radvil/test';

@Component({
  selector: 'rad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private testApi: TestService) {
    this.testApi.getHello().subscribe(console.log);
  }
}
