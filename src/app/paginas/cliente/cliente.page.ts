import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/servicios/api.service';
import { empty } from 'rxjs';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {
  clienteData: any = [];
  planes: any = [];
  profesiones: any = [];
  clienteSeleccionado: any;
  mostrarClientesB: boolean = true;
  guardar: boolean = true;
  data: any = {
    cli_nombres: '',
    cli_apellidos: '',
    cli_email: '',
    cli_telefono: '',
    cli_direccion: '',
    cli_plan_id: '',
    cli_profesion: '',
  };
  constructor(
    private plataform: Platform,
    private http: HttpClient,
    private api: ApiService
  ) {}
  nuevoCliente() {
    this.guardar = true;
    this.mostrarClientes(false);
    this.data.cli_nombres = '';
    this.data.cli_apellidos = '';
    this.data.cli_email = '';
    this.data.cli_telefono = '';
    this.data.cli_direccion = '';
    this.data.cli_plan_id = this.planes;
    this.data.cli_profesion = this.profesiones;
  }
  guardarNuevoCliente() {
    this.api.HttpPost('clients', this.data).subscribe((res) => {
      this.ngOnInit();
    });
  }
  actualizarCliente() {
    this.api
      .HttpPut('clients/' + this.clienteSeleccionado._id, this.data)
      .subscribe((res) => {
        this.ngOnInit();
      });
  }
  eliminarCliente(cliente: any) {
    //console.log("eliminar")
    this.clienteSeleccionado = cliente;
    this.api
      .HttpDelete('clients', this.clienteSeleccionado._id)
      .subscribe((res) => {
        this.ngOnInit();
      });
  }
  mostrarClientes(mostrarClientes: boolean) {
    this.mostrarClientesB = mostrarClientes;
  }
  seleccionarCliente(cliente: any) {
   //console.log("selecciona")
    this.guardar = false;
    this.mostrarClientes(false);
    this.clienteSeleccionado = cliente;
    this.data.cli_nombres = cliente.cli_nombres;
    this.data.cli_apellidos = cliente.cli_apellidos;
    this.data.cli_email = cliente.cli_email;
    this.data.cli_telefono = cliente.cli_telefono;
    this.data.cli_direccion = cliente.cli_direccion;
    this.data.cli_plan_id = cliente.cli_plan_id;
    this.data.cli_profesion = cliente.cli_profesion;
  }

  ngOnInit() {
    this.mostrarClientes(true);
    this.api.httpGet('clients').subscribe((res: any) => {
      this.clienteData = res;
    });
    this.api.httpGet('plans').subscribe((res: any) => {
      this.planes = res;
    });
    this.api.httpGet('professions').subscribe((res: any) => {
      this.profesiones = res;
    });
  }
}
