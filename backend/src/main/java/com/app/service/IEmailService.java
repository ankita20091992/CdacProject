package com.app.service;

import com.app.email_utils.EmailDetails;

public interface IEmailService {
	
	String sendSimpleMail(EmailDetails details);
	
}
