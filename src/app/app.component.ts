import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  items:Observable<any[]>
  title = 'firebase';

  constructor(private Firestore:AngularFirestore){

    

  }
  ngOnInit(): void {
    this.items = this.Firestore.collection('items').valueChanges();
  }

  add(name){
    this.Firestore.collection('items').add({name})
  }
}
