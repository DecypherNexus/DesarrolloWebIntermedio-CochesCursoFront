import {Injectable} from '@angular/core';
import {AuthLoginRequestDTO} from "../dtos/AuthLoginRequestDTO";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";
import {AuthLoginResponseDTO} from "../dtos/AuthLoginResponseDTO";
import {TokenService} from "./token.service";
import {Observable, tap} from "rxjs";
import {RegisterRequestDTO} from "../dtos/RegisterRequestDTO";
import {RegisterResponseDTO} from "../dtos/RegisterResponseDTO";

const {apiUrl} = environment;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private readonly apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient, private tokenService: TokenService) {
  }

  public signIn(authLoginRequestDTO: AuthLoginRequestDTO): Observable<AuthLoginResponseDTO> {

    return this.httpClient.post<AuthLoginResponseDTO>(`${apiUrl}/auth/sign-in`, authLoginRequestDTO).pipe(
      tap(response => {
        this.tokenService.saveToken(response.jwt);
      })
    );

  }

  public register(registerRequestDTO: RegisterRequestDTO): Observable<RegisterResponseDTO> {
    return this.httpClient.post<RegisterResponseDTO>(`${apiUrl}/auth/register`, registerRequestDTO);
  }

}
