import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private usernameModal = 'punam';
  private password = '1418';
  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    setTimeout(()=>{
      //this.userName.nativeElement;
    },500)
  }
  login = (form:any)=>{
    console.log(form);
    if(form.username == 'punam' && form.password === "1418"){
      this.navCtrl.setRoot(HomePage);
    }
  }
}
