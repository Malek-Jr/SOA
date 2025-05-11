import { Injectable } from '@angular/core'; 
import { Moto } from '../model/moto.model';  // 
import { Marque } from '../model/marque.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MarqueWrapper } from '../model/marqueWrapped.model';
import { AuthService } from './auth.service';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root',
})
export class MotoService {
  motos!: Moto[]; //un tableau de Moto
  moto!: Moto;
  marques!: Marque[];

  apiURL: string = 'http://localhost:8082/motos/api';
  apiURLCat: string = 'http://localhost:8082/motos/mar';

  constructor(private http: HttpClient,
              private authService : AuthService ) {}

  listeMoto(): Observable<Moto[]> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
  return this.http.get<Moto[]>(this.apiURL+"/all",{headers:httpHeaders});

  }

  ajouterMoto( prod: Moto):Observable<Moto>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
      return this.http.post<Moto>(this.apiURL+"/addmoto", prod, {headers:httpHeaders});
    }
   
    
 
supprimerMoto(id : number) {
     const url = `${this.apiURL}/delmoto/${id}`;
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
        return this.http.delete(url,  {headers:httpHeaders});
      }
    
 consulterMoto(id: number): Observable<Moto> {
        const url = `${this.apiURL}/getbyid/${id}`;
        console.log(url);
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
          return this.http.get<Moto>(url,{headers:httpHeaders});
        }

  updateMoto(prod :Moto) : Observable<Moto>    {
      console.log(prod.marque);
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
          return this.http.put<Moto>(this.apiURL+"/updatemoto", prod, {headers:httpHeaders});
        }


       
     listeMarques():Observable<MarqueWrapper>{
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return  this.http.get<MarqueWrapper>(this.apiURLCat,{headers:httpHeaders});
      
          }     



  consulterMarque(id: number): Marque {
    return this.marques.find((cat) => cat.idMar == id)!;
  }

 
  
 rechercherParMarque(idCat: number):Observable< Moto[]> {
  const url = `${this.apiURL}/motosmar/${idCat}`;
  return this.http.get<Moto[]>(url);
    }

    rechercherParModele(nom: string):Observable< Moto[]> {
      const url = `${this.apiURL}/prodsByName/${nom}`;
        return this.http.get<Moto[]>(url);
     }

     ajouterMarque( cat: Marque):Observable<Marque>{
      return this.http.post<Marque>(this.apiURLCat, cat, httpOptions);
     }


}
