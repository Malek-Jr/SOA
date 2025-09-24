import { Component, OnInit } from '@angular/core';
import { Moto } from '../model/moto.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MotoService } from '../services/moto.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Marque } from '../model/marque.model';

@Component({
    selector: 'app-update-moto',
    imports: [FormsModule, CommonModule],
    templateUrl: './update-moto.component.html',
    styles: ``
})
export class UpdateMotoComponent implements OnInit {
  currentMoto = new Moto();

  marques!: Marque[];
  updatedMarId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private motoService: MotoService
  ) {}

  ngOnInit(): void {
    this.motoService.listeMarques().
    subscribe(cats => {console.log(cats);
                       this.marques = cats._embedded.marques;
                       }
  );
    this.motoService.consulterMoto(this.activatedRoute.snapshot.params['id']).
    subscribe( prod =>{ this.currentMoto = prod; 
      this.updatedMarId =   this.currentMoto.marque.idMar;
    
    } ) ;
    }



  updateMoto() {
    this.currentMoto.marque = this.marques.find(
      (cat) => cat.idMar == this.updatedMarId
    )!;
    this.motoService.updateMoto(this.currentMoto).subscribe((prod) => {
      this.router.navigate(['motos']);
    });
  }
}
