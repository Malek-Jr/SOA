import { Component, OnInit } from '@angular/core';
import { Moto } from '../model/moto.model';
import { Marque } from '../model/marque.model';
import { MotoService } from '../services/moto.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-recherche-par-marque',
    imports: [FormsModule, CommonModule],
    templateUrl: './recherche-par-marque.component.html',
    styles: ``
})
export class RechercheParMarqueComponent  implements OnInit{

  motos! : Moto[];
  IdMarque! : number;
  marques! : Marque[];


  constructor(private motoService: MotoService) {}

ngOnInit(): void {
    this.motoService.listeMarques().
    subscribe(cats => {this.marques = cats._embedded.marques;
      console.log(cats);
  });
  }


  onChange() {
    this.motoService.rechercherParMarque(this.IdMarque).
      subscribe(prods =>{this.motos=prods});
    }




}
