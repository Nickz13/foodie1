import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var window;
@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {
  slides = [
    {
      title: "smth",
      description: "ndjknsk",
      image: "assets/imgs/chick.jfif"
    },
    {
      title: "smth",
      description: "ndjknsk",
      image: "assets/imgs/food2.jfif"
    },
    {
      title: "smth",
      description: "ndjknsk",
      image: "assets/imgs/food3.jfif"
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }
  callIT(passedNumber){
    //You can add some logic here
     window.location = passedNumber;
    }
}
