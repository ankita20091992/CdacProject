package com.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.email_utils.EmailDetails;
import com.app.service.IEmailService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/sendMail")
public class EmailController {

	@Autowired
	private IEmailService emailService;

	// Sending a Email
	@PostMapping("")
	public String sendMail(@RequestBody EmailDetails details) {
		String status = emailService.sendSimpleMail(details);
		return status;
	}

}