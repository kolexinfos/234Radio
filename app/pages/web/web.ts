import { Component } from '@angular/core';
import { NavController, Platform, LoadingController } from 'ionic-angular';

import { HomePage } from '../home/home';

import {InAppBrowser, InAppBrowserRef} from 'ionic-native';


/*
  Generated class for the WebPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/web/web.html',
})
export class WebPage {

  constructor(private navCtrl: NavController,public  platform: Platform, public loadingCtrl: LoadingController) {}

  ionViewWillEnter()
  {
    console.log('Entered into the view');



    this.navCtrl.setRoot(HomePage);
    //window.open('http://234radio.com', '_system');

    let browser: InAppBrowserRef = InAppBrowser.open('http://234radio.com', '_blank', "EnableViewPortScale=yes" );
    browser.show();


  }

}
