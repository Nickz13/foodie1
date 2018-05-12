import { Component } from '@angular/core';
import { NavController, ModalController, ModalOptions } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   public items: any;
  constructor(public modal: ModalController, public navCtrl: NavController, public http: HttpClient) {
    this.getData();
  }
 
  getData() {
    let url = 'data/register-data.json';
    let data: Observable<any> = this.http.get(url);
    data.subscribe(result => {
      this.items = result;

    });
  }
 

  openModal() {
      const myModal = this.modal.create("ModalPage");
      
      myModal.onDidDismiss(data => {
        this.items.push(data);
      });
      myModal.present();
  }
  
 
}