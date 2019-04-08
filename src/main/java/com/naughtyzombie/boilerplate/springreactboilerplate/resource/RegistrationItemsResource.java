
package com.naughtyzombie.boilerplate.springreactboilerplate.resource;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

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
		log.info(" Add request {}", registrationItems);
		registrationItemsService.addRegistrationItems(registrationItems);

		return registrationItemsService.getAllRegistrationItems();
	}

	@RequestMapping(value = "/trackingNo/{trackingno}", method = GET)
	public RegistrationItems getRegistrationItemByTracking(@PathVariable("trackingno") Long trackingno) {
		return registrationItemsService.findByTrackingNo(trackingno);
	}

	@RequestMapping(value = "/updateRegDetails/{trackingno}", method = RequestMethod.PUT)
	public RegistrationItems updateMovieById(@PathVariable("trackingno") Long trackingno,
			@Valid @RequestBody RegistrationItems registrationItems) {
		log.info(" request {}", registrationItems);

		RegistrationItems regItems = registrationItemsService.findByTrackingNo(trackingno);
		regItems.setRegitemSubtypes(registrationItems.getRegitemSubtypes());
		regItems.setRegitemSubsubtypes(registrationItems.getRegitemSubsubtypes());
		log.info(" Update request {}", regItems);

		registrationItemsService.addRegistrationItems(regItems);

		return registrationItemsService.findByTrackingNo(regItems.getTrackingNo());

	}
}
