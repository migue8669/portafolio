import { ProductoDescripcion } from "./../../interfaces/producto-descripcion.interface";
import { ProductosService } from "./../../services/productos.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    public productoService: ProductosService
  ) {}
  producto: ProductoDescripcion;
  id: string;
  ngOnInit() {
    this.router.params.subscribe(parametros => {
      this.productoService
        .obtenerProducto(parametros['id'])
        .subscribe((producto: ProductoDescripcion) => {
          this.id=parametros['id'];
          this.producto = producto;
          console.log(producto);
        });
    });
  }
}
