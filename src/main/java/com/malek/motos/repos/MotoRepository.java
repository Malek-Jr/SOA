package com.malek.motos.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.malek.motos.entities.Marque;
import com.malek.motos.entities.Moto;

public interface MotoRepository extends JpaRepository<Moto, Long> {
	List<Moto> findByModeleMoto(String nom);
	List<Moto> findByModeleMotoContains(String nom);

	@Query("select p from Moto p where p.modeleMoto like %:nom and p.prixMoto > :prix")
	List<Moto> findByModelePrix (@Param("nom") String nom,@Param("prix") Double prix);
    
	@Query("select p from Moto p where p.marque = ?1")
	List<Moto> findByMarque (Marque categorie);
	
	List<Moto> findByMarqueIdMar(Long id);
	
	List<Moto> findByOrderByModeleMotoAsc();
	
	@Query("select p from Moto p order by p.modeleMoto ASC, p.prixMoto DESC")
	List<Moto> trierMotosModelesPrix ();
	              

}
