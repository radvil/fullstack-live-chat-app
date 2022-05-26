import { Component } from '@angular/core';
import { TestService } from '@radvil/api/test';

@Component({
  selector: 'web-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private testApi: TestService) {
    this.testApi.getHello().subscribe(console.log);
  }
}
