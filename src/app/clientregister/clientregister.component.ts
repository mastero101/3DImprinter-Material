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
  ids: any;

  constructor() { }

  ngOnInit() {
    this.id = Math.floor(Math.random() * 1000)
    this.ids = this.clave()
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

  selectedValue() {
    const radios = Array.from(document.getElementsByName('luna')) as HTMLInputElement[];
    let selectedValue = null;
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selectedValue = radios[i].value;
            break;
        }
    }
    return selectedValue;
  }

  clave() {
    const db = getDatabase();
    const starCountR = ref(db, '/i' + '/ids');
      onValue(starCountR, (snapshot) => {     
        this.ids = snapshot.val()
        this.ids = Number(this.ids);
        console.log(this.ids)
    })
  }

  submit() {
    const id = this.id;
    const ids = (document.getElementById('1.1') as HTMLInputElement).value;
    const cliente = (document.getElementById('2') as HTMLInputElement).value;
    const No_Orden = (document.getElementById('3') as HTMLInputElement).value;
    const tipoLuna = this.selectedValue();
    const fechaCompra = (document.getElementById('5') as HTMLInputElement).value;
    const fechaEntrega = (document.getElementById('6') as HTMLInputElement).value;
    const frase = (document.getElementById('7') as HTMLInputElement).value;
    const db = getDatabase();
      set(ref(db, '/' + (ids) ), {
        id,
        cliente,
        No_Orden,
        tipoLuna,
        fechaCompra,
        fechaEntrega,
        frase
      });
      const dbs = getDatabase();
      set(ref(dbs, '/i'), {
        ids
      });
    console.log(id, cliente, No_Orden, tipoLuna, fechaCompra, fechaEntrega, frase);
    alert('Guardado')
    this.ngOnInit()
    window.location.reload()
  }

}
