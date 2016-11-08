import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ContactPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/contact/contact.html',
})
export class ContactPage {

  report: {email?: string, message?: string, phone?: string,title?: string} = {};
  
  constructor(private navCtrl: NavController) {

  }

}
