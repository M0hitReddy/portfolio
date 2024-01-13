package com.portfolio.contacts.repository;

import com.portfolio.contacts.entity.Message;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepository extends CrudRepository<Message, Long>, PagingAndSortingRepository<Message, Long> {

    //    Page<Message> findAll(Pageable pageable);
    @Query("SELECT m FROM Message m WHERE m.isPublic = true ORDER BY m.dateTime DESC")
    List<Message> findTop10ByIsPublicOrderByDateTimeDesc(Pageable pageable);
}
