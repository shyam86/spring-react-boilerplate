package com.naughtyzombie.boilerplate.springreactboilerplate.model;

import javax.persistence.*;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "registration_items")
@Data
@NoArgsConstructor
public class RegistrationItems {

	@Id
	private Long regItemUid;
	private Long regitemSubsubtypes;
	private Long regitemSubtypes;
	private Long certificateNo;
	private Long trackingNo;



}


