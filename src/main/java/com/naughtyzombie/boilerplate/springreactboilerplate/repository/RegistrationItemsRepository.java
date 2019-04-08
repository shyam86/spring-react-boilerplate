
package com.naughtyzombie.boilerplate.springreactboilerplate.repository;

import com.naughtyzombie.boilerplate.springreactboilerplate.model.RegistrationItems;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegistrationItemsRepository extends JpaRepository<RegistrationItems, Long> {
	
	RegistrationItems findByTrackingNo(Long trackingNo);
}
