import { ProductosService } from './services/productos.service';
import { InfoPainaService } from './services/info-paina.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(public infoPaginaS: InfoPainaService,public productoSerivce:ProductosService){}
}
