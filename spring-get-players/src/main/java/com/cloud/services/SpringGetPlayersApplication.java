package com.cloud.services;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableAutoConfiguration
public class SpringGetPlayersApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringGetPlayersApplication.class, args);
	}

}
