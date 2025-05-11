package com.malek.motos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.malek.motos.entities.Marque;
import com.malek.motos.entities.Moto;
import com.malek.motos.repos.MotoRepository;

@Service
public class MotoServiceImpl implements MotoService {

	@Autowired
	MotoRepository produitRepository;
	
	@Override
	public Moto saveMoto(Moto p) {
		return produitRepository.save(p);
		
	}

	@Override
	public Moto updateMoto(Moto p) {
		return produitRepository.save(p);
		
	}

	@Override
	public void deleteMoto(Moto p) {
		produitRepository.delete(p);

	}

   @Override
	public void deleteMotoById(Long id) {
		produitRepository.deleteById(id);
		
	}

	@Override
	public Moto getMoto(Long id) {
		return  produitRepository.findById(id).get();
	
	}

	@Override
	public List<Moto> getAllMotos() {
		return produitRepository.findAll();
	}
	
    @Override
	public List<Moto> findByModeleMoto(String nom) {
		return produitRepository.findByModeleMoto(nom);
	}

	@Override
	public List<Moto> findByModeleMotoContains(String nom) {
		return produitRepository.findByModeleMotoContains(nom);
	}

	@Override
	public List<Moto> findByModelePrix(String nom, Double prix) {
		return produitRepository.findByModelePrix(nom, prix);
	}
	
	@Override
	public List<Moto> findByMarque(Marque categorie) {
		return produitRepository.findByMarque(categorie);
	}

	@Override
	public List<Moto> findByMarqueIdMar(Long id) {
		return produitRepository.findByMarqueIdMar(id);
	}

	@Override
	public List<Moto> findByOrderByModeleMotoAsc() {
		return produitRepository.findByOrderByModeleMotoAsc();
	}

	@Override
	public List<Moto> trierMotosModelesPrix() {
		return produitRepository.trierMotosModelesPrix();
	}


}
