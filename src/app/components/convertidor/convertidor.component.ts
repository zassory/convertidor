import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {  
  cantidad = 0;
  tengo='USD';
  quiero='EUR';
  total=0;
  
  monedas: string[] = ['USD', 'EUR', 'LIBRA'];

  constructor() { }

  ngOnInit(): void {
  }

  convertir():void{
    switch(this.tengo) {
      case 'USD':
        if(this.quiero === 'USD'){
          this.total = this.cantidad;
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad * 0.84;
        }
        if(this.quiero === 'LIBRA'){
          this.total = this.cantidad * 0.75;
        }
        break;
      case 'EUR':
        if(this.quiero === 'EUR'){
          this.total = this.cantidad;
        }
        if(this.quiero === 'USD'){
          this.total = this.cantidad * 1.20;
        }
        if(this.quiero === 'LIBRA'){
          this.total = this.cantidad * 0.90;
        }
        break;
      case 'LIBRA':
        if(this.quiero === 'LIBRA'){
          this.total = this.cantidad;
        }
        if(this.quiero === 'USD'){
          this.total = this.cantidad * 1.33;
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad * 1.11;
        }
        break;      
    }
  }

}
