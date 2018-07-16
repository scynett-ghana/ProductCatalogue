import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ProductService{
    productBaseUrl = "http://localhost:3000/products/";
    constructor(private  http: HttpClient){}

    getAll(){
        return this.http.get(this.productBaseUrl);
    }
    getOne(id: string){
        return this.http.get(this.productBaseUrl + id);
    }
    save(product: {}){
        return this.http.post(this.productBaseUrl, product);
    }
    update(id: string, product: {}){
        return this.http.put(this.productBaseUrl + id, product);
    }
    delete(id: string){
        return this.http.delete(this.productBaseUrl + id);
    }

}