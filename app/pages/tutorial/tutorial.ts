import { Component } from '@angular/core';

import { MenuController, NavController, LocalStorage , Storage, Platform } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';


import { UserProvider } from '../../providers/user-provider/user-provider';



interface Slide {
  title: string;
  description: string;
  image: string;
}

@Component({
  templateUrl: 'build/pages/tutorial/tutorial.html',
  providers: [UserProvider]
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;


  constructor(public platform: Platform, public navCtrl: NavController, public menu: MenuController, private userProvider: UserProvider) {
    this.slides = [
      {
        title: 'Welcome to <b>234Radio</b>',
        description: '<b>234Radio</b> helps you get stuff done',
        image: 'img/234radio.jpg',
      },
      {
        title: 'This is how <b>ErrandHQ</b> Works',
        description: 'You want to get stuff done but can not move around?',
        image: 'img/234radio.jpg',
      },
      {
        title: 'Then what happens next?',
        description: 'Tell us you <i>Need Help</i>',
        image: 'img/234radio.jpg',
      },
      {
        title: 'Need some tips to stay head on schedule??',
        description: 'Gain a <i>heads-up</i> by inviting friends</b>.',
        image: 'img/234radio.jpg',
      }
    ];

    this.platform.ready().then(() => {
    console.log("ionViewWillEnter called");
    console.log(this.userProvider.GetLocalObject('user'));
    
    window.open('http://twitter.com', '_system');

    if(this.userProvider.GetLocalObject('user') != null){
      //this.navCtrl.setRoot(HomePage);
    }
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

  }

}
