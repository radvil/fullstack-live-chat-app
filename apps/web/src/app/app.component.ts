import { Component } from '@angular/core';
import { TestService } from '@radvil/test';
import { FindOptionsOrderValue } from 'typeorm';

@Component({
  selector: 'web-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private testApi: TestService) {
    this.testApi
      .getUsers({
        limit: 10,
        offset: 0,
        order: {
          username: <FindOptionsOrderValue>'asc',
        },
      })
      .subscribe(console.log);
  }
}
