import { Component, OnInit } from '@angular/core';

import { getDatabase, ref, update, child, get, onValue, set, push } from 'firebase/database';

import * as uuid from 'uuid';

@Component({
  selector: 'app-clientregister',
  templateUrl: './clientregister.component.html',
  styleUrls: ['./clientregister.component.scss']
})
export class ClientregisterComponent implements OnInit {
  id: any;

  constructor() { }

  ngOnInit() {
    this.id = Math.floor(Math.random() * 1000)
  }

  /*getDatabase() {
    const db = getDatabase();
    const starCountRef = ref(db, '/-NNcPepHh9ikvIqP8p93/id' );
      onValue(starCountRef, (snapshot) => {
    this.id = snapshot.val();
      console.log(this.id);
      this.id = Number(this.id);
    });
  }*/

  submit() {
    const id = this.id;
    const cliente = (document.getElementById('2') as HTMLInputElement).value;
    const No_Orden = (document.getElementById('3') as HTMLInputElement).value;
    const tipoLuna = (document.getElementById('4') as HTMLInputElement).value;
    const fechaCompra = (document.getElementById('5') as HTMLInputElement).value;
    const fechaEntrega = (document.getElementById('6') as HTMLInputElement).value;
    const frase = (document.getElementById('7') as HTMLInputElement).value;
    const db = getDatabase();
      push(ref(db, '/'), {
        id,
        cliente,
        No_Orden,
        tipoLuna,
        fechaCompra,
        fechaEntrega,
        frase
      });
    console.log(id, cliente, No_Orden, tipoLuna, fechaCompra, fechaEntrega, frase);
    alert('Guardado')
    this.ngOnInit()
  }

  

}
