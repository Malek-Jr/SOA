package com.malek.motos.service;

import java.util.List;

import com.malek.motos.entities.Marque;
import com.malek.motos.entities.Moto;

public interface MotoService {
	
	 Moto saveMoto(Moto p);
	 Moto updateMoto(Moto p);
	 void deleteMoto(Moto p);
     void deleteMotoById(Long id);
	 Moto getMoto(Long id);
	 List<Moto> getAllMotos();
	 
	 List<Moto> findByModeleMoto(String nom);
	 List<Moto> findByModeleMotoContains(String nom);
	 List<Moto> findByModelePrix (String nom, Double prix);
	 List<Moto> findByMarque (Marque categorie);
	 List<Moto> findByMarqueIdMar(Long id);
	 List<Moto> findByOrderByModeleMotoAsc();
	 List<Moto> trierMotosModelesPrix();

}
