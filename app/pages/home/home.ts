import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import {InAppBrowser, InAppBrowserRef} from 'ionic-native';

import { WebPage } from '../web/web';
import { ReportPage } from '../report/report';
import { ContactPage } from '../contact/contact';

import {RadioPlayer} from '../../providers/radio-player/radio-player';

declare var window;
/*
  Generated class for the HomePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [RadioPlayer]
})
export class HomePage {
  mySlideOptions = {
    initialSlide: 1,
    loop: true,
    autoplay: 5000,
    pager:true
  };

  playState: string;

  player:any;
  constructor(player: RadioPlayer, public navCtrl: NavController, public loadingCtrl: LoadingController) {
    this.player = player;
    this.playState = "pause";
    this.startPlaying();
    console.log("Constructor called");
  }

  startPlaying() {
    let loadingPopup = this.loadingCtrl.create({
      content: 'Loading please wait...'
    });

    loadingPopup.present();

    this.player.play().then(() => {
      console.log('Playing');
      loadingPopup.dismiss();
    });
  }

  changeState(){
    if(this.playState == "pause"){
      this.playState = "play"
      this.pause();
    }
    else
    {
      this.playState = "pause"
      this.startPlaying();
    }
  }
  pause() {
    this.player.pause();
  }

  openWeb(){

    let browser: InAppBrowserRef = InAppBrowser.open('http://234radio.com', '_blank', "EnableViewPortScale=yes" );
    browser.show();
  }

  gotoReport(){
    this.navCtrl.setRoot(ReportPage);
  }

  onSlideChangeStart(event){
    console.log(event);
  }

  gotoContact(){
    this.navCtrl.setRoot(ContactPage);
  }

  gotoPrograms(){

    let browser: InAppBrowserRef = InAppBrowser.open('http://234radio.com/programmes/', '_blank', "EnableViewPortScale=yes" );
    browser.show();
  }

  openFacebook(){
    let browser: InAppBrowserRef = InAppBrowser.open('https://www.facebook.com/234radio', '_blank', "EnableViewPortScale=yes" );
    browser.show();
  }

  openTwitter(){
    let browser: InAppBrowserRef = InAppBrowser.open('https://twitter.com/my234Radio', '_blank', "EnableViewPortScale=yes" );
    browser.show();
  }

  openInstagram(){
    let browser: InAppBrowserRef = InAppBrowser.open('http://234radio.com', '_blank', "EnableViewPortScale=yes" );
    browser.show();
  }

  makeCall(passedNumber){
    window.location = passedNumber;
  }

}
