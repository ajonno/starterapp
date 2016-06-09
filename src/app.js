import {inject} from 'aurelia-framework';
//import {HttpClient} from 'aurelia-http-client';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';


@inject(HttpClient)
export class Users {
      
  

  heading = 'Github Users';
  users = [];

  constructor(http) {

    // http.configure(config => {
    //   config
    //     .withBaseUrl('https://api.derivatives.com/farm/app/personaltestapp/getPortfolio')
    // });
   
    http.configure(config => {
        config
        .withDefaults({
            //mode: 'no-cors', //redirect: 'follow',
            //credentials: 'same-origin', // Valid values; omit, same-origin and include
            headers: {
               'Content-Type': 'application/json',
              'Authorization': 'Basic am9obnN0b25hX204NTpKMGhuc3QwbkFK'
            }
          })
        .withBaseUrl('https://api.derivatives.com/farm/app/personaltestapp/getPortfolio');
       // .withBaseUrl('http://brianapidemos.azurewebsites.net/CommunityApi/api/Events');
      });

      this.http = http;
  }

  activate() {

  //  return this.http.get('https://api.derivatives.com/farm/app/personaltestapp/getPortfolio');
   //   .then(httpResponse => this.users = httpResponse.response);
      return this.http.fetch('')
        .then(response => response.json())
        .then(users => {
          this.users = users;
          //console.log(JSON.stringify(users)); 
      });

  }
  
}