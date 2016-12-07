import { Component } from '@angular/core';

import { MenuController, NavController, LocalStorage , Storage, Platform, LoadingController } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';


import { UserProvider } from '../../providers/user-provider/user-provider';
import {RadioPlayer} from '../../providers/radio-player/radio-player';



interface Slide {
  title: string;
  description: string;
  image: string;
}

@Component({
  templateUrl: 'build/pages/tutorial/tutorial.html',
  providers: [UserProvider, RadioPlayer]
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;
  player:any;

  constructor(public loadingCtrl: LoadingController, player: RadioPlayer,public platform: Platform, public navCtrl: NavController, public menu: MenuController, private userProvider: UserProvider) {
    this.player = player;
    //this.startPlaying();

    this.slides = [
      {
        title: 'Welcome to <b>234Radio</b>',
        description: 'Welcome to <b>234Radio</b>, your number one international online radio.',
        image: 'img/234radio.jpg',
      },
      {
        title: 'Find <b>234Radio</b> on all social media platforms',
        description: 'Follow us on Twitter: @my234radio and search for 234Radio on Facebook',
        image: 'img/234radio.jpg',
      },
      {
        title: 'Then what happens next?',
        description: 'Submit Eye-Witness report and get heard <i>Need Help</i>',
        image: 'img/234radio.jpg',
      },
      {
        title: 'Need some tips to stay head on schedule??',
        description: 'Gain a <i>heads-up</i> by inviting friends</b>.',
        image: 'img/234radio.jpg'
      }
    ];

    this.platform.ready().then(() => {
    console.log("ionViewWillEnter called");
    console.log(this.userProvider.GetLocalObject('user'));

    //window.open('http://twitter.com', '_system');

    if(this.userProvider.GetLocalObject('user') != null){
      //this.navCtrl.setRoot(HomePage);
    }
    });
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
  startApp() {

    this.navCtrl.setRoot(HomePage);
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd;
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(true);

  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
    this.pause();

  }

  pause() {
    this.player.pause();
  }

}
