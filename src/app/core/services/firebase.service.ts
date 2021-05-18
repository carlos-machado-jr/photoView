import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

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
}
