import { Component, OnInit } from '@angular/core';
import { InfoPainaService } from 'src/app/services/info-paina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
anio:number=new Date().getFullYear();
  constructor(public servicio:InfoPainaService) { }

  ngOnInit() {
  }

}
