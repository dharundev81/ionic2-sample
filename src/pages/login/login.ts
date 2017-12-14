import { Component,Input } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginParams } from './login-params'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user : LoginParams;

  constructor(public navCtrl: NavController, public navParams: NavParams, public al:AlertController) {

    this.user = new LoginParams();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  // @Input() login : LoginPage;

  alert(){

    let alert = this.al.create({
      title: 'WOW',
      subTitle: 'U R Logins',
      message: this.user.password,
      buttons: ['OK']
    });
    alert.present();

  }

}
