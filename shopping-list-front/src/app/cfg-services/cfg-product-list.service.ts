import { CfgUserService } from './cfg-user.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CfgProductListService {

    userParams: any = {
        userId: ''
    };

    constructor(
        private http: HttpClient,
        private userService: CfgUserService
    ) { }

    setNewProductList(payload) {
        return this.http.post(environment.apiBaseUrl + '/newProductList', payload);
    }

    getUserProductLists(userId) {
        this.userParams.userId = userId;
        return this.http.get(environment.apiBaseUrl + '/getUserProductLists', this.userParams);
    }

    updateUserProductList(payload) {
        return this.http.put(environment.apiBaseUrl + '/updateUserProductList/', payload);
    }

    deleteUserProductList(_id) {
        console.log('_id', _id);
        return this.http.delete(environment.apiBaseUrl + '/deleteUserProductList/' + _id);
    }

}
