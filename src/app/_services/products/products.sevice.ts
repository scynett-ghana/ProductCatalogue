import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

Injectable();
export class ProductsSevice{
    baseProductUrl: string = "http://localhost:3000/products/";
    constructor(private http: HttpClient){
    }

    createproduct(product: {}){
        return this.http.post(this.baseProductUrl, product)
    }

    getAllProduct(){
        return this.http.get(this.baseProductUrl)
    }

    updateProduct(id: string, product: {}){
        return this.http.put(this.baseProductUrl + id, product)
    }

    getOne(id: string){
        return this.http.get(this.baseProductUrl + id)
    }

    deleteProduct(id: string){
        return this.http.get(this.baseProductUrl + id)
    }
}