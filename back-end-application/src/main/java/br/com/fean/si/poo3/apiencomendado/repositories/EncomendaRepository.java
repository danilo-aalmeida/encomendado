package br.com.fean.si.poo3.apiencomendado.repositories;

import java.util.List;

public class EncomendaRepository extends CrudRepository<Encomenda, String>{
    List<Encomenda> findAll();
}
