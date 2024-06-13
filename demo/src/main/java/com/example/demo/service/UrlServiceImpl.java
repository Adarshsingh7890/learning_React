package com.example.demo.service;

import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.demo.model.Url;
import com.example.demo.model.UrlDto;
import com.example.demo.repository.UrlRepository;
import com.google.common.hash.Hashing;

import io.micrometer.common.util.StringUtils;

@Component
public class UrlServiceImpl implements UrlService{

    @Autowired
    private UrlRepository urlRepository;
    @Override
    public Url generateshortLink(UrlDto urlDto){
        if (StringUtils.isNotEmpty(urlDto.getUrl())){
            String encodedUrl = encodedUrl(urlDto.getUrl());
            Url urlToPersist = new Url();
            urlToPersist.setCreationDate(LocalDateTime.now());
            urlToPersist.setExpirationDate(getExpirationDate(urlDto.getExpirationDate(),urlToPersist.getCreationDate()));
            urlToPersist.setShortLink(encodedUrl);
            urlToPersist.setOriginalUrl(urlDto.getUrl());
            Url urlToreturn = persistShortLink(urlToPersist);

            if(urlToreturn!=null)return urlToreturn;
        }
        return null;
    }
    private LocalDateTime getExpirationDate(LocalDateTime expirationDate, LocalDateTime creationDate) {
        if (expirationDate == null){
            return creationDate.plusSeconds(60);
        }

        return expirationDate;
    }
    private String encodedUrl(String url) {
        String encodedUrl = "";
        LocalDateTime time = LocalDateTime.now();
        encodedUrl = Hashing.murmur3_32_fixed().hashString(url.concat(time.toString()), StandardCharsets.UTF_8).toString();
        return encodedUrl;
    }
    @Override
    public Url persistShortLink(Url url){
        Url urlToRet = urlRepository.save(url);
        return urlToRet;
    }
    @Override
    public Url getEncodedUrl(String url){
        Url urlToRet = urlRepository.findByShortLink(url);
        return urlToRet;
    }
    @Override
    public void deleteShortLink(Url url){
        urlRepository.delete(url);
    }
}
