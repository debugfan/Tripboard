import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';
//import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MePage } from '../me/me';

//@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // username = '';
  // email = '';

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = MePage;

  // constructor(private nav: NavController, private auth: AuthServiceProvider) {
  //   let info = this.auth.getUserInfo();
  //   this.username = info['name'];
  //   this.email = info['email'];
  // }
  
  // public logout() {
  //   this.auth.logout().subscribe(succ => {
  //     this.nav.setRoot('LoginPage')
  //   });
  // }  
}
