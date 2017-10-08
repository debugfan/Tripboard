import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';

/**
 * Generated class for the MePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-me',
  templateUrl: 'me.html',
})
export class MePage {

  username = '';
  email = '';
  title = 'Me';

  //constructor(public navCtrl: NavController, public navParams: NavParams) {
  //}

  constructor(private nav: NavController, public navParams: NavParams, private auth: AuthServiceProvider) {
    let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];
    this.title = this.username;
  }
  
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot(LoginPage)
    });
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad MePage');
  }

}
