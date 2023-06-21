import {Component} from '@angular/core';
import {TokenService} from "../../../../core/services/token.service";
import {Subscription} from "rxjs";
import {CarService} from "../../../../core/services/car.service";

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.css']
})
export class HeaderNavbarComponent {

  public customerName: string;
  public customerEmail: string;
  public productsNumber: number = 0;
  public subscriptionNumber: Subscription;

  constructor(private tokenService: TokenService, private carService: CarService) {

    this.customerName = this.tokenService.getTokenData().fullName;
    this.customerEmail = this.tokenService.getTokenData().email;

  }

}
