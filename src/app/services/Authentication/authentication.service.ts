import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';

// import { LocalStorageService } from 'angular-2-local-storage';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';
// import { AUTH_CONSTANT } from '../../constants/url-constants';
// import { HttpInterceptor } from './../../config/HTTP';
// import { HeadersService } from '../../constants/url-constants';
// import { LoadingBarService } from './../../components/core/loading-bar';

@Injectable()
export class AuthenticationService {

    constructor(
        // private _http: HttpInterceptor,
        // private _storage: LocalStorageService,
        private _router: Router,
        //  private _headers: HeadersService,
        // private _loadingBarService: LoadingBarService
    ) { }

    /** Login the User into the System */
    login(authObject) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers, withCredentials: true });

        // return this._http.post(environment.URL + AUTH_CONSTANT.LOGIN, authObject, options)
        //     .toPromise()
        //     .then(data => {
        //         this._storage.set('xcsrftoken', data.headers.get('X-CSRF-TOKEN'));
        //         const res = data.json();
        //         if (res) {
        //             // this.isLoggedIn = true;
        //             this._storage.set('IS_LOGGED_IN', true);
        //             this._storage.set('userdetails', res);
        //             //this._appACLService.createPrivileges(res);
        //             // service call to get the secure chat credentials
        //             // this.getSecureChatLoginDetails();
        //             /** Navigating user to another page if login is successful. */
        //             if (res.new_user === true) {
        //                 this._router.navigate(['./register-mch']);
        //             } else {
        //                 this._router.navigate(['./home']);
        //             }
        //         }
        //     }, (res_error) => {
        //         const error = res_error.json();
        //         this._storage.set('IS_LOGGED_IN', false);
        //         return error;
        //     });
    }

    /** Logout the user out of the system */
    logout() {
        // const options = this._headers.getHeaders();
        // return this._http.post(environment.URL + AUTH_CONSTANT.LOGOUT, {}, options)
        //     .subscribe(res => {

        //         // Checking whether the status code is for Success or not
        //         if (res.status === 200) {

        //             // clear the all loaclstorage value
        //             this._storage.clearAll();

        //             // Storing the Logout In Users data into the localStorage & making isLoggedIn false
        //             this._storage.set('IS_LOGGED_IN', false);
        //             // Navigate the page to the home page
        //             this._router.navigate(['./']);
        //         }
        //     });
    }
}
