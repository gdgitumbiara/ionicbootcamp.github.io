import {Component} from '@angular/core';
import {Nav, Platform } from 'ionic-angular';
import {InAppBrowser} from 'ionic-native';
import {Agenda} from '../../pages/agenda/agenda';
import {Cidades} from '../../pages/cidades/cidades';


@Component({
  selector: 'home',
  templateUrl: 'template.html'
})
export class Home {
  nav: Nav;
  platform: Platform;
  mySlideOptions: Object;

  constructor(nav: Nav, platform: Platform) {
    this.nav = nav;
    this.platform = platform;

    this.mySlideOptions = {
      autoplay: 3000,
      loop: true
    };
  }

  openAgenda() {
    this.nav.setRoot(Agenda);
  }

  openRegister() {
    this.nav.setRoot(Cidades);
  }
  
  openBitBar(){
    if(this.platform.is('core') || this.platform.is('mobileweb')){
      window.open('https://play.google.com/store/apps/details?id=space.joselito.bitbar', '_blank');
    } else {
      InAppBrowser.open("https://play.google.com/store/apps/details?id=space.joselito.bitbar", "_system");
    }
  }
}
