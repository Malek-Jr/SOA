package com.malek.motos.entities;

import org.springframework.data.rest.core.config.Projection;

@Projection(name = "modeleMoto", types = { Moto.class })
public interface MotoProjection {
	public String getModeleMoto();
}

