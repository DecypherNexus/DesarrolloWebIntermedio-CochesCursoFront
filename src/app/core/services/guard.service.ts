import {Injectable} from '@angular/core';
import {TokenService} from "./token.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private tokenService: TokenService, private router: Router) {
  }

  public canActivateWithAuth(): boolean {

    if (this.tokenService.getToken()) {
      this.router.navigateByUrl("/portafolio");
      return true;
    }

    return false;

  }

  public canActivateWithoutAuth(): boolean {

    if (!this.tokenService.getToken()) {
      alert("¡No tiene Permisos!")
      this.router.navigateByUrl("/autenticacion/inicio-sesion");
      return false;
    }

    return true;

  }

}
