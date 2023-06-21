import {Injectable} from '@angular/core';
import {getCookie, setCookie} from "typescript-cookie";
import jwtDecode from "jwt-decode";
import {JWTCustomerDTO} from "../dtos/JWTCustomerDTO";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() {
  }

  public getToken(): string {
    return getCookie("token");
  }

  public saveToken(token: string): void {
    setCookie("token", token, {expires: 1, path: "/"})
  }

  public deleteToken(): void {
  }

  public getTokenData(): JWTCustomerDTO {
    let tokenData = jwtDecode(getCookie("token"));
    return <JWTCustomerDTO> tokenData;
  }

}
