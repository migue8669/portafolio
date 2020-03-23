import { InfoPagina } from './../interfaces/info-pagina.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class InfoPainaService {
info:InfoPagina={};
cargada:false;
equipo:any[]=[];
  constructor(private http: HttpClient) {
this.cargarInfo();
this.cargarEquipo();
  }
  private cargarInfo(){
    this.http.get('assets/data/data-pagina.json').subscribe(
      (resp:InfoPagina)=>{
        this.info=resp;
        console.log(resp);});
  }
private cargarEquipo(){
  this.http.get('https://angular-53a9d.firebaseio.com/equipo.json').subscribe(
    (resp:any)=>{
      this.equipo=resp;
      console.log(resp);});
}

}
