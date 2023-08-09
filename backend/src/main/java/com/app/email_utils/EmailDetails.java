package com.app.email_utils;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//Annotations
@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmailDetails {

	 	private String recipient;
	 	
	    private String msgBody;
	    
}
