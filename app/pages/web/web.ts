import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the WebPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/web/web.html',
})
export class WebPage {

  constructor(private navCtrl: NavController) {}
  
  ionViewWillEnter()
  {
    console.log('Entered into the view');
    window.open('http://twitter.com', '_system');
  }

}
