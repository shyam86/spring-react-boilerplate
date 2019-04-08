
package com.naughtyzombie.boilerplate.springreactboilerplate.resource;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.naughtyzombie.boilerplate.springreactboilerplate.model.Book;
import com.naughtyzombie.boilerplate.springreactboilerplate.model.RegistrationItems;
import com.naughtyzombie.boilerplate.springreactboilerplate.service.RegistrationItemsService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping(value = "/api/registrations", produces = APPLICATION_JSON_VALUE)
@Slf4j
public class RegistrationItemsResource {

	@Autowired
	RegistrationItemsService registrationItemsService;

	@RequestMapping(path = "/registrations", method = GET)
	public List<RegistrationItems> getAllRegistrationItems() {
		return registrationItemsService.getAllRegistrationItems();
	}
	  @RequestMapping(path = "/addregistrations", method = POST)
	    public List<RegistrationItems> addRegistrationItems(@RequestBody RegistrationItems registrationItems) {
	        log.info("Book Add request {}", registrationItems);
	        registrationItemsService.addRegistrationItems(registrationItems);

	        return registrationItemsService.getAllRegistrationItems();
	    }
}
