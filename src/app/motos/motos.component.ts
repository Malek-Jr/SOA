import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Moto } from '../model/moto.model';
import { MotoService } from '../services/moto.service';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-motos',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './motos.component.html',
  styleUrl: './motos.component.css'
})
export class MotosComponent implements OnInit  {
  motos! : Moto[]; //un tableau de Produit
  constructor(private motoService : MotoService,
              public authService: AuthService) {  }

  
   ngOnInit() {
    this.chargerMotos();
     }

    chargerMotos(){
      this.motoService.listeMoto().subscribe(prods => {
        console.log(prods);
        this.motos = prods;
      }); 
    }
  
  




    supprimerMoto(p: Moto)
    {
      let conf = confirm("Etes-vous sûr ?");
      if (conf)
      this.motoService.supprimerMoto(p.idMoto).subscribe(() => {
        console.log("moto supprimé");
        this.chargerMotos();
           });
    } 


    

}
