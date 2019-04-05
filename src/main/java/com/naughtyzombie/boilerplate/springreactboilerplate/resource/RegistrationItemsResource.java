
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
import com.naughtyzombie.boilerplate.springreactboilerplate.service.BookService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping(value = "/api/registrations", produces = APPLICATION_JSON_VALUE)
@Slf4j
public class RegistrationItemsResource {

    @Autowired
    BookService bookService;

    @RequestMapping(path = "/registrations", method = GET)
    public List<Book> getAllBooks() {
        return bookService.getAllBooks();
    }

    @RequestMapping(path = "/addbook", method = POST)
    public List<Book> addBook(@RequestBody Book book) {
        log.info("Book Add request {}", book);
        bookService.addBook(book);

        return bookService.getAllBooks();
    }

}
