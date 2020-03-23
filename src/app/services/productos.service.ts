import { Productos_idx } from "./../interfaces/productos_idx.interface";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ProductosService {
  cargando = true;
  productos: Productos_idx[] = [];
  productoFiltrado: Productos_idx[] = [];

  constructor(private http: HttpClient) {
    this.cargarProducto();
  }

  private cargarProducto() {
    return new Promise((resolve, reject) => {
      this.http
        .get("https://angular-53a9d.firebaseio.com/productos_idx.json")
        .subscribe((resp: Productos_idx[]) => {
          this.productos = resp;
          this.cargando = false;
          resolve();
        });
    });
  }
  obtenerProducto(id: string) {
    return this.http.get(
      `https://angular-53a9d.firebaseio.com/productos/${id}.json`
    );
  }
  buscarProducto(termino: string) {
    if (this.productos.length == 0) {
      this.cargarProducto().then(() => {
        this.filtrarProducto(termino);
      });
    } else {
      this.productoFiltrado = this.productos.filter(producto => {
        return true;
      });
    }
  }
  private filtrarProducto(termino: string) {
    console.log(this.productos+"desde filtrarPrd");
    termino = termino.toLowerCase();
    this.productoFiltrado = [];
    this.productos.forEach(producto => {
      const tituloMinuscula = producto.titulo.toLowerCase();

      if (
        producto.categoria.indexOf(termino) >= 0 ||
        tituloMinuscula.indexOf(termino) >= 0
      ) {
        this.productoFiltrado.push(producto);
      }
    });
  }
}
