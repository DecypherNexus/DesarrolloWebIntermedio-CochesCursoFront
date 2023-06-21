import {inject, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GuardAuthService} from "../core/services/guard-auth.service";

const routes: Routes = [
  {
    path: "autenticacion",
    // canActivate: [AuthWithGuard],
    canActivate: [() => inject(GuardAuthService).canActivateWithAuth()],
    loadChildren: () => import("./auth/auth.module").then(a => a.AuthModule)
  },
  {
    path: "portafolio",
    // canActivate: [AuthWithoutGuard],
    canActivate: [() => inject(GuardAuthService).canActivateWithoutAuth()],
    loadChildren: () => import("./home/home.module").then(h => h.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule {
}
