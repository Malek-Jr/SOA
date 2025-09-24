import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Moto } from '../model/moto.model';
import { MotoService } from '../services/moto.service';
import { Marque } from '../model/marque.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-add-moto',
    imports: [CommonModule, FormsModule],
    templateUrl: './add-moto.component.html'
})
export class AddMotoComponent implements OnInit {

  newMoto = new Moto();
  message! : string;
  marques! : Marque[];
  newIdMar! : number;
  newMarque! : Marque;


  constructor(private motoService: MotoService,
              private router :Router
   ) {}


   ngOnInit(): void {
    this.motoService.listeMarques().
          subscribe(cats => {console.log(cats);
                             this.marques = cats._embedded.marques;
                             }
        );
  }




  addMoto(){
    this.newMoto.marque = this.marques.find(cat => cat.idMar == this.newIdMar)!;
     this.motoService.ajouterMoto(this.newMoto)
                       .subscribe(prod => {
                       console.log(prod);
                       this.router.navigate(['motos']);
                       }); 
     }
 



}
