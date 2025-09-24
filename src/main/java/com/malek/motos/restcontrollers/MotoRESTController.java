package com.malek.motos.restcontrollers;

import java.util.List;

import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.malek.motos.entities.Moto;
import com.malek.motos.service.MotoService;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class MotoRESTController {
	@Autowired
	MotoService produitService;
	@GetMapping("/auth")
	Authentication getAuth(Authentication auth)
	{
	return auth;
	}

	
	@RequestMapping(path="all",method =RequestMethod.GET)
	public List<Moto> getAllMotos() {
		return produitService.getAllMotos();
	 } 		
	
	@RequestMapping(value="/getbyid/{id}",method = RequestMethod.GET)
	//@GetMapping("/getbyid/{id}")
	public Moto getMotoById(@PathVariable("id") Long id) {	
		return produitService.getMoto(id);
    }
	
	@RequestMapping(value="/addmoto",method = RequestMethod.POST)
	//@PostMapping("/addprod")
	public Moto createMoto(@RequestBody Moto moto) {
		return produitService.saveMoto(moto);
	}

	@RequestMapping(value="/updatemoto",method = RequestMethod.PUT)
	//@PutMapping("/updateprod")
	public Moto updateMoto(@RequestBody Moto moto) {
		return produitService.updateMoto(moto);
	}

	@RequestMapping(value="/delmoto/{id}",method = RequestMethod.DELETE)
	//@DeleteMapping("/delprod/{id}")
	public void deleteMoto(@PathVariable("id") Long id)
	{
		produitService.deleteMotoById(id);
	}
	
	@RequestMapping(value="/motosmar/{idCat}",method = RequestMethod.GET)
	public List<Moto> getMotosByMarId(@PathVariable("idCat") Long idCat) {
		return produitService.findByMarqueIdMar(idCat);
	 }


}
