package com.example.customerapp.controller;

import com.example.customerapp.model.User;
import com.example.customerapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    // SIGNUP
    @PostMapping("/signup")
    public ResponseEntity<Map<String, String>> signup(@RequestBody User user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return ResponseEntity.status(409).body(Map.of("message", "Email already exists!"));
        }
        userRepository.save(user);
        return ResponseEntity.ok(Map.of("message", "Signup Successful!"));
    }

    // LOGIN
    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody User user) {
        Optional<User> existingUser = userRepository.findByEmail(user.getEmail());

        if (existingUser.isPresent()) {
            if (existingUser.get().getPassword().equals(user.getPassword())) {
                return ResponseEntity.ok(Map.of("message", "Login Successful!"));
            } else {
                return ResponseEntity.status(401).body(Map.of("message", "Incorrect Password!"));
            }
        } else {
            return ResponseEntity.status(404).body(Map.of("message", "User not found!"));
        }
    }
}