import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {RadioPlayer} from '../../providers/radio-player/radio-player';

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

  player:any;
  constructor(player: RadioPlayer) {
    this.player = player;
  }

  startPlaying() {
    this.player.play().then(() => {
      console.log('Playing');
    });
  }

  pause() {
    this.player.pause();
  }

}
