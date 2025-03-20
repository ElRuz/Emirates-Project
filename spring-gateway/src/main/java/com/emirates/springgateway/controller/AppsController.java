package com.emirates.springgateway.controller; 

import java.util.Map;
import org.springframework.http.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/apps")  
public class AppsController {

    private final RestTemplate restTemplate = new RestTemplate();
    private static final String NODE_API_URL = "http://host.docker.internal:3000/records";  

    @GetMapping
    public ResponseEntity<String> getApps(@RequestParam(required = false) String search) {
        String url = NODE_API_URL + (search != null ? "?search=" + search : "");
        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
        return ResponseEntity.status(response.getStatusCode()).body(response.getBody());
    }

    @PutMapping("/{appName}")
    public ResponseEntity<String> updateApp(@PathVariable String appName, @RequestBody Map<String, Object> updates){
        String url = NODE_API_URL + "/" + appName;
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<Map<String, Object>> requestEntity = new HttpEntity<>(updates, headers);

        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.PUT, requestEntity, String.class);
        return ResponseEntity.status(response.getStatusCode()).body(response.getBody());
    }

    @DeleteMapping("/{appName}")
    public ResponseEntity<String> deleteApp(@PathVariable String appName){
        String url = NODE_API_URL + "/" + appName;
        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.DELETE, null, String.class);
        return ResponseEntity.status(response.getStatusCode()).body(response.getBody());
    }
}
