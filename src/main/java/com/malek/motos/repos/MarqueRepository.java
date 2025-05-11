package com.malek.motos.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.malek.motos.entities.Marque;

@RepositoryRestResource(path = "mar")
public interface MarqueRepository extends JpaRepository<Marque, Long> {

}
