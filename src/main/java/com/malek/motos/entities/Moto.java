package com.malek.motos.entities;

import java.util.Date;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Moto {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idMoto;
	private String modeleMoto;
	private Double prixMoto;
	private Date dateFabrication;
	private int puissanceMoto;
	
	
	@ManyToOne
	private Marque marque;

	
	

	public Moto() {
		super();
	}

	public Moto(String modele, Double prix, Date dateCreation,int p) {
		super();
		this.modeleMoto = modele;
		this.prixMoto = prix;
		this.dateFabrication = dateCreation;
		this.puissanceMoto=p;
	}

	public Long getIdMoto() {
		return idMoto;
	}

	public void setIdMoto(Long idMoto) {
		this.idMoto = idMoto;
	}

	public String getModeleMoto() {
		return modeleMoto;
	}

	public void setModeleMoto(String modeleMoto) {
		this.modeleMoto = modeleMoto;
	}

	public Double getPrixMoto() {
		return prixMoto;
	}

	public void setPrixMoto(Double prixMoto) {
		this.prixMoto = prixMoto;
	}

	public Date getDateFabrication() {
		return dateFabrication;
	}

	public void setDateFabrication(Date dateFabrication) {
		this.dateFabrication = dateFabrication;
	}

	public int getPuissanceMoto() {
		return puissanceMoto;
	}

	public void setPuissanceMoto(int puissanceMoto) {
		this.puissanceMoto = puissanceMoto;
	}

	public Marque getMarque() {
		return marque;
	}

	public void setMarque(Marque marque) {
		this.marque = marque;
	}

	@Override
	public String toString() {
		return "Moto [idMoto=" + idMoto + ", modeleMoto=" + modeleMoto + ", prixMoto=" + prixMoto + ", dateFabrication="
				+ dateFabrication + ", puissanceMoto=" + puissanceMoto + "]";
	}




}
