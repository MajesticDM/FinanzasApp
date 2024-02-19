import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';
import { Router } from '@angular/router';

import { register } from 'swiper/element/bundle';

register();
@Component({
  selector: 'app-deudas',
  templateUrl: './deudas.page.html',
  styleUrls: ['./deudas.page.scss'],
})
export class DeudasPage implements OnInit {
  cantidadSlidesPorVista: number = 1;
  tarjetas: any = [];
  mostrarDeudas: boolean = true;
  crearDeudaNueva: boolean = false;
  abonarDeuda: boolean = false;
  informacionDeuda: boolean = false;
  toastMessage: string = '';
  isToastOpen = false;
  NuevaDeuda: any = {
    nombre_deuda: '',
    periocidad: '',
    valor_periodico: '',
    numero_cuotas: '',
    fecha_inicial: new Date(),
    institucion: '',
    esNecesario: false,
    comentario: '',
    valor_final: 0,
    valor_pagado: 0,
    deuda_activa: true,
    ultimo_pago: '',
    pagos: [
      {
        fecha_pago: 'Sin cuota inicial',
        valor_pago: 0,
      },
    ],
  };
  PagarDeudaCreada: any = {
    id_object: '',
    fecha_pago: new Date(),
    valor_pago: 0,
    valor_acumulado: 0,
  };

  constructor(private api: ApiService, private router: Router) {}
  mostrarNuevaDeuda() {
    this.NuevaDeuda = {
      pagos: [{ fecha_pago: 'Sin cuota inicial', valor_pago: 0 }],
    };
    this.mostrarDeudas = false;
    this.abonarDeuda = false;
    this.informacionDeuda = false;
    this.crearDeudaNueva = true;
  }
  mostrarAbonarDeuda() {
    this.mostrarDeudas = false;
    this.abonarDeuda = true;
    this.crearDeudaNueva = false;
    this.informacionDeuda = false;
  }
  mostrarCargarDeudas() {
    this.mostrarDeudas = true;
    this.abonarDeuda = false;
    this.crearDeudaNueva = false;
    this.informacionDeuda = false;
  }
  mostrarInformacionDeuda(deuda: any) {
    this.informacionDeuda = true;
    this.NuevaDeuda = deuda;
    this.mostrarDeudas = false;
    this.abonarDeuda = false;
    this.crearDeudaNueva = false;
  }
  CargarDeudas() {
    this.api.httpGet('debts').subscribe((res: any) => {
      this.cantidadSlidesPorVista = res.length > 3 ? 3 : res.length - 1;
      this.tarjetas = res;
      this.mostrarCargarDeudas();
    });
  }

  CrearDeuda() {
    if (
      this.NuevaDeuda.pagos.fecha_pago != undefined ||
      this.NuevaDeuda.pagos.fecha_pago != undefined
    ) {
      this.NuevaDeuda.pagos[0].fecha_pago = this.NuevaDeuda.pagos.fecha_pago;
      this.NuevaDeuda.pagos[0].valor_pago = this.NuevaDeuda.pagos.valor_pago;
    }
    this.NuevaDeuda.valor_final =
      this.NuevaDeuda.valor_periodico * this.NuevaDeuda.numero_cuotas;
    this.api.HttpPost('debts', this.NuevaDeuda).subscribe((res: any) => {
      if (res.acknowledged) {
        //PADO
        this.toastMessage = 'Acabas de crear una deuda :(';
        this.setOpen(true);
        setTimeout(() => {
          this.ngOnInit();
        }, 2000);
      } else {
      }
    });
  }
  PagarDeuda() {
    this.PagarDeudaCreada.valor_acumulado =
      this.PagarDeudaCreada.valor_pago + this.NuevaDeuda.valor_pagado;
    this.PagarDeudaCreada.id_object = this.NuevaDeuda._id;
    debugger;
    this.api.httpPatch('debts', this.PagarDeudaCreada).subscribe((res: any) => {
      debugger;
      if (res.acknowledged) {
        //PADO
        this.toastMessage = 'Acabas de abonar a una deuda :)';
        this.setOpen(true);
        setTimeout(() => {
          this.ngOnInit();
        }, 2000);
      } else {
      }
    });
  }
  CambiarEstadoDeuda() {}

  IniciarComponenteDeudas() {
    this.CargarDeudas();
  }
  ngOnInit() {
    this.IniciarComponenteDeudas();
  }

  public toastButtons = [
    // {
    //   text: 'More Info',
    //   role: 'info',
    //   handler: () => {
    //     console.log('More Info clicked');
    //   },
    // },
    {
      text: 'Ok',
      role: 'cancel',
      handler: () => {
        this.setOpen(true);
      },
    },
  ];

  setRoleMessage(ev: any) {
    const { role } = ev.detail;
    this.setOpen(false);
  }

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }
}
