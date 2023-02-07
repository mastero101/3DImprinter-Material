import { Component, OnInit } from '@angular/core';
import { getDatabase, ref, update, child, get, onValue, DataSnapshot } from 'firebase/database';

@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.scss']
})
export class ClientlistComponent implements OnInit {
  id: any;
  orden: any;
  tipo: any;
  nombre: any;
  fechaC: any
  fechaE: any;
  frase: any;
  id2: any;
  orden2: any;
  tipo2: any;
  nombre2: any;
  fechaC2: any
  fechaE2: any;
  frase2: any;

  constructor() { 
    this.id = this.getNombre();
    this.orden = this.getNombre();
    this.tipo = this.getNombre();
    this.nombre = this.getNombre();
    this.fechaC = this.getNombre();
    this.fechaE = this.getNombre();
    this.frase = this.getNombre();
    this.id2 = this.getNombre2();
    this.orden2 = this.getNombre2();
    this.tipo2 = this.getNombre2();
    this.nombre2 = this.getNombre2();
    this.fechaC2 = this.getNombre2();
    this.fechaE2 = this.getNombre2();
    this.frase2 = this.getNombre2();
   }

  ngOnInit(): void {
  }
  
  getNombre() {
    const db = getDatabase();
    const starCountR = ref(db, '/-NNei3QctHRuXgeiNb4t' + '/id');
      onValue(starCountR, (snapshot) => {
    this.id = 'Id: '+ snapshot.val();
    })
    const starCountRe = ref(db, '/-NNei3QctHRuXgeiNb4t' + '/No_Orden');
      onValue(starCountRe, (snapshot) => {
    this.orden = 'No Orden: ' + snapshot.val();
    })
    const starCountRef = ref(db, '/-NNei3QctHRuXgeiNb4t' + '/tipoLuna');
      onValue(starCountRef, (snapshot) => {
    this.tipo = 'Tipo: ' + snapshot.val() + ' cm';
    })
    const starCountRef1 = ref(db, '/-NNei3QctHRuXgeiNb4t' + '/cliente');
      onValue(starCountRef1, (snapshot) => {
    this.nombre = 'Cliente: ' + snapshot.val();
    })
    const starCountRef2 = ref(db, '/-NNei3QctHRuXgeiNb4t' + '/fechaCompra');
      onValue(starCountRef2, (snapshot) => {
    this.fechaC = 'Fecha Compra - ' + snapshot.val();
    })
    const starCountRef3 = ref(db, '/-NNei3QctHRuXgeiNb4t' + '/fechaEntrega');
      onValue(starCountRef3, (snapshot) => {
    this.fechaE = 'Fecha Entrega - ' + snapshot.val();
    })
    const starCountRef4 = ref(db, '/-NNei3QctHRuXgeiNb4t' + '/frase');
      onValue(starCountRef4, (snapshot) => {
    this.frase = 'Frase - ' + snapshot.val();
    })
  }

  getNombre2() {
    const db = getDatabase();
    const starCountR = ref(db, '/-NNeqtyL4CbLE3OZLwPh' + '/id');
      onValue(starCountR, (snapshot) => {
    this.id2 = 'Id: '+ snapshot.val();
    })
    const starCountRe = ref(db, '/-NNeqtyL4CbLE3OZLwPh' + '/No_Orden');
      onValue(starCountRe, (snapshot) => {
    this.orden2 = 'No Orden: ' + snapshot.val();
    })
    const starCountRef = ref(db, '/-NNeqtyL4CbLE3OZLwPh' + '/tipoLuna');
      onValue(starCountRef, (snapshot) => {
    this.tipo2 = 'Tipo: ' + snapshot.val() + ' cm';
    })
    const starCountRef1 = ref(db, '/-NNeqtyL4CbLE3OZLwPh' + '/cliente');
      onValue(starCountRef1, (snapshot) => {
    this.nombre2 = 'Cliente: ' + snapshot.val();
    })
    const starCountRef2 = ref(db, '/-NNeqtyL4CbLE3OZLwPh' + '/fechaCompra');
      onValue(starCountRef2, (snapshot) => {
    this.fechaC2 = 'Fecha Compra - ' + snapshot.val();
    })
    const starCountRef3 = ref(db, '/-NNeqtyL4CbLE3OZLwPh' + '/fechaEntrega');
      onValue(starCountRef3, (snapshot) => {
    this.fechaE2 = 'Fecha Entrega - ' + snapshot.val();
    })
    const starCountRef4 = ref(db, '/-NNeqtyL4CbLE3OZLwPh' + '/frase');
      onValue(starCountRef4, (snapshot) => {
    this.frase2 = 'Frase - ' + snapshot.val();
    })
  }

  /*getData() {
    const db = getDatabase();
    const star = ref(db,"/");
    ref.on("value", (snapshot: DataSnapshot) => {
      const data = snapshot.val();
      // Aquí puedes acceder a los valores almacenados usando la clave correspondiente, por ejemplo:
      this.id = data.id;
      this.orden = data.orden;
    });
  }*/
}
