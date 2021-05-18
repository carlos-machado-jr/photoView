import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  colecoesFotos: AngularFirestoreCollection

  constructor(
    private af: AngularFirestore
  ) {
    this.colecoesFotos = this.af.collection("Fotos");
   }

   createFoto(foto){
    return this.colecoesFotos.add(foto);
   }

   getAllFotos(){
     return this.colecoesFotos.snapshotChanges().pipe(
       map(actions => {
         return actions.map( a => {
           const data = a.payload.doc.data();
           const id = a.payload.doc.id;
           return { id, ...data}
         } )
       })
     )
   }
}
