
package com.naughtyzombie.boilerplate.springreactboilerplate.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.naughtyzombie.boilerplate.springreactboilerplate.model.RegistrationItems;
import com.naughtyzombie.boilerplate.springreactboilerplate.repository.RegistrationItemsRepository;

@Service("registrationItemService")
public class RegistrationItemsService {
    @Autowired
    private RegistrationItemsRepository registrationItemsRepository;

    public List<RegistrationItems> getAllRegistrationItems() {
        return registrationItemsRepository.findAll();
    }

   
}
