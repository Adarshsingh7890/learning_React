package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Url;

public interface UrlRepository extends JpaRepository<Url, Long> {

    public Url findByShortLink(String shortLink);
    
}
