
package com.naughtyzombie.boilerplate.springreactboilerplate.service;

import com.naughtyzombie.boilerplate.springreactboilerplate.model.Book;
import com.naughtyzombie.boilerplate.springreactboilerplate.model.RegistrationItems;
import com.naughtyzombie.boilerplate.springreactboilerplate.repository.BookRespository;
import com.naughtyzombie.boilerplate.springreactboilerplate.repository.RegistrationItemsRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("registrationItemService")
public class RegistrationItemService {
    @Autowired
    private RegistrationItemsRepository registrationItemsRepository;

    public List<RegistrationItems> getAllBooks() {
        return bookRespository.findAll();
    }

    public boolean addBook(Book book) {
        Book save = bookRespository.save(book);

        return save != null;
    }
}
