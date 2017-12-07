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

  constructor(public navCtrl: NavController, public navParams: NavParams, public al:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  // @Input() login : LoginPage;

  alert(name:string,pass:string){

    let alert = this.al.create({
      title: 'WOW',
      subTitle: 'U R Logins',
      message: name,
      buttons: ['OK']
    });
    alert.present();

  }

}
