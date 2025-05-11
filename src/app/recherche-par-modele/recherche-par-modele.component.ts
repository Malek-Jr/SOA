import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Moto } from '../model/moto.model';
import { MotoService } from '../services/moto.service';
import { SearchFilterPipe } from '../search-filter.pipe';

@Component({
  selector: 'app-recherche-par-modele',
  standalone: true,
  imports: [FormsModule, CommonModule,SearchFilterPipe],
  templateUrl: './recherche-par-modele.component.html',
  styles: ``
})

export class RechercheParModeleComponent implements OnInit {

  modeleMoto! : string;
  motos!: Moto[];

  allMotos!: Moto[];
  searchTerm!: string;
  
  constructor(private motoService : MotoService) { }

  ngOnInit(): void {
    this.motoService.listeMoto().subscribe(prods => {
      console.log(prods);
      this.motos = prods;
      this.allMotos = prods;
      });
  }

      
  

  rechercherMotos(){
    if (this.modeleMoto=="")
       this.ngOnInit();
    else
       this.motoService.rechercherParModele(this.modeleMoto).
           subscribe(prods => {
              console.log(prods);
              this.motos=prods;});
  }

  onKeyUp(filterText : string){
    this.motos = this.allMotos.filter(item =>
    item.modeleMoto.toLowerCase().includes(filterText));
    }

    
    
}