import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../Model/User';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Produit } from '../Model/Produit';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  produit?:Produit[];

  private url = `${environment.apiUrl}`;
  private apiUrl = `${environment.apiUrl}/produits`;
  private urlAdmin =`${environment.apiUrl}/admin/produit`;

  public search = new BehaviorSubject<string>("");

  constructor(
    private http:HttpClient,
    private router:Router ) {}

    /** CRUD Produit */

    getProduits(){
      return this.http
        .get<Produit[]>(this.apiUrl)
    }

    createProduits(produit:Produit){
      return this.http
        .post<Produit>(this.urlAdmin + "/", produit);
    }

    getProduitId(id:number){
      return this.http
        .get<Produit>(this.urlAdmin + "/" + id);
    }

    updateProduit(produit:Produit){
      return this.http
        .put<Produit>(this.urlAdmin + "/" + produit.id, produit);
    }

    deleteProduit(produitId:number){
      return this.http
        .delete<Produit>(this.urlAdmin + "/" + produitId);
    }

     /**
   * méthode qui permet de récupérer le role
   */
  getUserList(){
    return this.http
      .get<User[]>(this.url + "/admin/listUser");
  }
  
  /**
   * méthode qui pérmet de s'enregistrer
   * @param newUser
   */
   register(newUser: User) {
    return this.http.post(`${this.url}/auth/signin`, newUser)
  }

  /**
   * méthode qui permet de se logger et de save le token en localStorage
   * @param user
   */
   login(user:User){
    return this.http.post(`${this.url}/auth/login`,user)
      .pipe(
        map(
          (resp:any)=>{
            localStorage.setItem('TOKEN_APPLI', resp.token);
            console.log('token Save');
            return resp;
          }
        )
      );
  }

  /**
   * méthode qui récupère le token du localStorage
   */
   getToken(){
    return localStorage.getItem("TOKEN_APPLI");
  }

  logout() {
    localStorage.removeItem('TOKEN_APPLI');
    console.log('déconnecter');
    this.router.navigate(['/login']);
  }
}
