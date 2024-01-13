package com.portfolio.contacts.controller;

import com.portfolio.contacts.entity.Message;
import com.portfolio.contacts.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*", methods = {RequestMethod.POST, RequestMethod.GET, RequestMethod.OPTIONS})
public class MessageController {

    @Autowired
    private MessageRepository messageRepository;
    @PostMapping(path = "/post")
    public Message postMessage(@RequestBody Message request){
        System.out.println(request.getMessage());
        Message message=new Message();
        message.setName(request.getName());
        message.setEmail(request.getEmail());
        message.setMessage(request.getMessage());
        message.setPublic(request.isPublic());
        messageRepository.save(message);
        return message;
    }

    @GetMapping("/get")
    public List<Message> getMessages(@RequestParam(name = "page") int pageNo) {
        Pageable pageable = PageRequest.of(pageNo, 10, Sort.by(Sort.Direction.DESC, "dateTime"));

        List<Message> messages = messageRepository.findTop10ByIsPublicOrderByDateTimeDesc(pageable);
        return messages;
    }
}
