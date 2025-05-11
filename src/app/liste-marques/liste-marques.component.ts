import { Component, OnInit } from '@angular/core';
import { Marque } from '../model/marque.model';
import { MotoService } from '../services/moto.service';
import { CommonModule } from '@angular/common';
import { UpdateMarqueComponent } from '../update-marque/update-marque.component';

@Component({
  selector: 'app-liste-marques',
  standalone: true,
  imports: [CommonModule,UpdateMarqueComponent],
  templateUrl: './liste-marques.component.html',
  styles: ``
})
export class ListeMarquesComponent implements OnInit {
  marques! : Marque[];
  updatedMar:Marque = {"idMar":0,"nomMar":""};

  ajout:boolean=true;

  constructor(private motoService : MotoService) { }

  ngOnInit(): void {
    this.motoService.listeMarques().
      subscribe(cats => {this.marques = cats._embedded.marques;
      console.log(cats);
    });
  }

  marqueUpdated(cat:Marque){
    console.log("Cat updated event",cat);
    this.motoService.ajouterMarque(cat).
      subscribe( ()=>  this.chargerMarques());
  }
  
chargerMarques(){
    this.motoService.listeMarques().
      subscribe(cats => {this.marques = cats._embedded.marques;
      console.log(cats);
    });
  }
 
  updateMar(cat:Marque) {
    this.updatedMar=cat;
    this.ajout=false;  

  }



}
