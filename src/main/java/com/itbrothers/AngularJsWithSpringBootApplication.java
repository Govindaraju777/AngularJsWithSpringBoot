package com.itbrothers;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages={"com.springmvcangularjs.*","com.itbrothers.*"})
public class AngularJsWithSpringBootApplication {

	public static void main(String[] args) {
		SpringApplication.run(AngularJsWithSpringBootApplication.class, args);
	}
}
