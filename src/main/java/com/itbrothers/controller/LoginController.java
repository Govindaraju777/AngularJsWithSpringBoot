/**
 * 
 */
package com.itbrothers.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author govindaraju.v
 *
 */
@Controller
@RequestMapping("/auth")
public class LoginController {
	@RequestMapping("/login")
    public String login() {
        return "/resources/html/login/login.html";
    }
}
