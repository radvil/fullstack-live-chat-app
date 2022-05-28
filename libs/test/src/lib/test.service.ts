import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TestService {
  constructor(private httpClient: HttpClient) {}

  getHello() {
    return this.httpClient.get('/api/hello');
  }

  getUsers(options: { [key: string]: unknown }) {
    const params = this.getHttpParams(options);

    return this.httpClient.get('/api/users', { params });
  }

  getHttpParams(options: { [key: string]: any }): HttpParams {
    let params = new HttpParams();

    Object.entries(options).forEach(([key, value]) => {
      if (typeof value === 'object') {
        value = JSON.stringify(value);
      }
      params = params.append(key, value);
    });

    return params;
  }
}
