import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

declare var Bmob: any;

//
export class User {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {
  currentUser: User;

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }

  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // // At this point make a request to your backend to make a real check!
        // let access = (credentials.password === "pass" && credentials.email === "email");
        // this.currentUser = new User('Simon', 'saimon@devdactic.com');
        // observer.next(access);
        // observer.complete();
        this.currentUser = new User(credentials.email, credentials.email);
        Bmob.User.logIn(credentials.email, credentials.password, {
            success: function(user) {
              // Do stuff after successful login.
              observer.next(true);
              observer.complete();
            },
            error: function(user, error) {
              // The login failed. Check error to see why.
              observer.next(false);
              observer.complete();
            }
        });
      });
    }
  }

  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      // return Observable.create(observer => {
      //   observer.next(true);
      //   observer.complete();
      // });
      return Observable.create(observer => {
        var user = new Bmob.User();
        user.set("username", credentials.email);
        user.set("email", credentials.email);
        user.set("password", credentials.password);

        // other fields can be set just like with Bmob.Object
        //user.set("phone", "415-392-0202");
        user.signUp(null, {
          success: function(user) {
            // Hooray! Let them use the app now.
            observer.next(true);
            observer.complete();
          },
          error: function(user, error) {
            // Show the error message somewhere and let the user try again.
            alert("Error: " + error.code + " " + error.message);
            observer.next(false);
            observer.complete();
          }
        });
      });
    }
  }

  public getUserInfo() : User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}
