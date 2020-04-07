package br.com.fean.si.poo3.apiencomendado.models;

import java.util.Date;
import java.util.HashMap;

@Entity
public class Encomenda {
    private String codigoRastreio;
    private String nome;
    private Date dataPostagem;
    private String status;
    private HashMap ocorrencias;

    public String getCodigoRastreio() {
        return codigoRastreio;
    }

    public void setCodigoRastreio(String codigoRastreio) {
        this.codigoRastreio = codigoRastreio;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Date getDataPostagem() {
        return dataPostagem;
    }

    public void setDataPostagem(Date dataPostagem) {
        this.dataPostagem = dataPostagem;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public HashMap getOcorrencias() {
        return ocorrencias;
    }

    public void setOcorrencias(HashMap ocorrencias) {
        this.ocorrencias = ocorrencias;
    }
}
