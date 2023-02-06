import { Component, OnInit } from '@angular/core';

import { getDatabase, ref, update, child, get, onValue, set, push } from 'firebase/database';

@Component({
  selector: 'app-clientregister',
  templateUrl: './clientregister.component.html',
  styleUrls: ['./clientregister.component.scss']
})
export class ClientregisterComponent implements OnInit {
  id: any;

  constructor() { }

  ngOnInit() {
    this.id = this.getDatabase();
  }

  getDatabase() {
    const db = getDatabase();
    const starCountRef = ref(db, '/-NNcPepHh9ikvIqP8p93/id' );
      onValue(starCountRef, (snapshot) => {
    this.id = snapshot.val();
      console.log(this.id);
      this.id = Number(this.id);
    });
  }

  submit() {
    const id = (document.getElementById('1') as HTMLInputElement).value;
    const cliente = (document.getElementById('2') as HTMLInputElement).value;
    const No_Orden = (document.getElementById('3') as HTMLInputElement).value;
    const tipoLuna = (document.getElementById('4') as HTMLInputElement).value;
    const fechaCompra = (document.getElementById('5') as HTMLInputElement).value;
    const fechaEntrega = (document.getElementById('6') as HTMLInputElement).value;
    const frase = (document.getElementById('7') as HTMLInputElement).value;
    const db = getDatabase();
      push(ref(db, '/'), {
        id: Number(id)+1,
        cliente,
        No_Orden,
        tipoLuna,
        fechaCompra,
        fechaEntrega,
        frase
      });
      /*
      update(ref(db, '/id/cliente/' ), {
        cliente
      });
      update(ref(db, '/id/No_Orden/' ), {
        No_Orden
      });
      update(ref(db, '/id/tipoLuna/' ), {
        tipoLuna
      });
      update(ref(db, '/id/fechaCompra/' ), {
        fechaCompra
      });
      update(ref(db, '/id/fechaEntrega/' ), {
        fechaEntrega
      });
      update(ref(db, '/id/frase/' ), {
        frase
      });
      */
    console.log(id, cliente, No_Orden, tipoLuna, fechaCompra, fechaEntrega, frase);
    alert('Guardado')
  }

}
