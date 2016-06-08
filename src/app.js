// export class Welcome {
//   heading = 'Welcome to Aurelia!';
//   firstName = 'John';
//   lastName = 'Doe';

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   submit() {
//     alert(`Welcome, ${this.fullName}!`);
//   }
// }

import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Users {
  heading = 'Github Users';
  users = [];

  constructor(http) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('http://brianapidemos.azurewebsites.net/CommunityApi/api/Events');
    });

    this.http = http;
  }

  activate() {
    return this.http.fetch('')
      .then(response => response.json())
      .then(users => this.users = users);
  }
}