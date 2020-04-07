package br.com.fean.si.poo3.apiencomendado.services;

import br.com.fean.si.poo3.apiencomendado.repositories.EncomendaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EncomendaService {

    private final EncomendaRepository encomendaRepository;

    @Autowired
    public EncomendaService(EncomendaRepository encomendaRepository) {
        this.encomendaRepository = encomendaRepository;
    }

    public
}
