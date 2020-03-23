import { InfoPainaService } from './../../services/info-paina.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public infoServices:InfoPainaService) { }

  ngOnInit() {
  }

}
