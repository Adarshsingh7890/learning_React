package com.example.demo.Controller;

import java.io.IOException;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Url;
import com.example.demo.model.UrlDto;
import com.example.demo.model.UrlErrorResponseDto;
import com.example.demo.model.UrlResponseDto;
import com.example.demo.service.UrlService;

import io.micrometer.common.util.StringUtils;
import jakarta.servlet.http.HttpServletResponse;

@RestController
public class UrlShorteningController {

    @Autowired
    private UrlService urlService;

    @PostMapping("/generate")
    public ResponseEntity<?> generateShortLink(@RequestBody UrlDto urlDto){
        Url urlToRet = urlService.generateshortLink(urlDto);

        if (urlToRet!=null){
            UrlResponseDto urlResponseDto = new UrlResponseDto(urlToRet.getOriginalUrl(), urlToRet.getShortLink(), urlToRet.getExpirationDate());
            return new ResponseEntity<UrlResponseDto>(urlResponseDto, HttpStatus.OK);
        }

        UrlErrorResponseDto urlErrorResponseDto = new UrlErrorResponseDto("404", "There was an error processing your request. Kindly Try again later");


        return new ResponseEntity<UrlErrorResponseDto>(urlErrorResponseDto, HttpStatus.OK);
    }


    @GetMapping("/{shortLink}")
    public ResponseEntity<?>redirectToOriginalUrl(@PathVariable String shortLink, HttpServletResponse response) throws IOException{
        if (StringUtils.isEmpty(shortLink)){
            UrlErrorResponseDto urlErrorResponseDto = new UrlErrorResponseDto("Invalid Url", "404");
            return new ResponseEntity<UrlErrorResponseDto>(urlErrorResponseDto,HttpStatus.OK);
        }
        
        Url urlToRet = urlService.getEncodedUrl(shortLink);
        if (urlToRet == null){
            UrlErrorResponseDto urlErrorResponseDto = new UrlErrorResponseDto("Either the Url doesn't exist or it has expired.", "404");
            return new ResponseEntity<UrlErrorResponseDto>(urlErrorResponseDto,HttpStatus.OK);
        }

        if (urlToRet.getExpirationDate().isBefore(LocalDateTime.now())){
            UrlErrorResponseDto urlErrorResponseDto = new UrlErrorResponseDto("Link has expired. Generate a new Url.", "200");
            return new ResponseEntity<UrlErrorResponseDto>(urlErrorResponseDto,HttpStatus.OK);
        }

        //UrlResponseDto urlResponseDto = new UrlResponseDto(urlToRet.getOriginalUrl(), shortLink, urlToRet.getExpirationDate());

        response.sendRedirect(urlToRet.getOriginalUrl());
        return null;
    }

}
