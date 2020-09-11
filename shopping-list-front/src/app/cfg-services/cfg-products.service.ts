import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CfgProductsService {

    constructor(
        private http: HttpClient
    ) { }

    getProducts() {
        return this.http.get(environment.apiBaseUrl + '/itemsList');
    }

    createProduct(payload) {
        return this.http.post(environment.apiBaseUrl + '/newItem', payload);
    }

}
