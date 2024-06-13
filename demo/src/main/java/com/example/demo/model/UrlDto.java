package com.example.demo.model;

import java.time.LocalDateTime;

public class UrlDto {
    private String url;
    private LocalDateTime expirationDate;

    
    @Override
    public String toString() {
        return "UrlDto [url=" + url + ", expirationDate=" + expirationDate + "]";
    }
    public UrlDto(String url, LocalDateTime expirationDate) {
        this.url = url;
        this.expirationDate = expirationDate;
    }
    
    public String getUrl() {
        return url;
    }
    public void setUrl(String url) {
        this.url = url;
    }
    public LocalDateTime getExpirationDate() {
        return expirationDate;
    }
    public void setExpirationDate(LocalDateTime expirationDate) {
        this.expirationDate = expirationDate;
    }
}
