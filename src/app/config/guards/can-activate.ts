import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './../../services/Authentication/authentication.service';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

    constructor(private _authenticationService: AuthenticationService, private _router: Router) { }

    canActivate() {
        // if (!this._authenticationService.isLoggedIn()) {
        //     this._router.navigateByUrl('/');
        // } else {
        //     return true;
        // }
        if (true) {
            this._router.navigateByUrl('/dashboard');
            return true;
        }
    }
}
