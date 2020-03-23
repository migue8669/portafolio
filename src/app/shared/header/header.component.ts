import { InfoPainaService } from "./../../services/info-paina.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(public servicio: InfoPainaService, private router: Router) {}

  ngOnInit() {}
  buscarProducto(termino: string) {
    console.log(termino);
    if (termino.length < 1) {
      return;
    }
    this.router.navigate(['/search', termino]);
  }
}
