import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  //{path:'',loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)},
  {path:'',loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)},
  //{path: 'inicio', pathMatch:'full',loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)},
  {path: 'folder', pathMatch:'full',loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)},
  {path: 'gastos-mensuales',loadChildren: () => import('./paginas/gastos-mensuales/gastos-mensuales.module').then( m => m.GastosMensualesPageModule)},
  {path: 'clientes',loadChildren: () => import('./paginas/cliente/cliente.module').then( m => m.ClientePageModule)},
  {path: 'deudas',loadChildren: () => import('./paginas/deudas/deudas.module').then( m => m.DeudasPageModule)},
  {path: 'ahorros',loadChildren: () => import('./paginas/ahorros/ahorros.module').then( m => m.AhorrosPageModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
