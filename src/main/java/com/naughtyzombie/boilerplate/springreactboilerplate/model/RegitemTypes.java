package com.naughtyzombie.boilerplate.springreactboilerplate.model;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "regitem_types")
@Data
@NoArgsConstructor
public class RegitemTypes implements java.io.Serializable {

	private Integer uid;
	private String name;
	private String display;
	private char activeFlag;
	private String identifier;
	private String createModifiedBy;
	private Date createModifiedDate;
	private Set<RegitemSubtypes> regitemSubtypeses = new HashSet<RegitemSubtypes>(0);
	private Set<RegistrationItems> registrationItemses = new HashSet<RegistrationItems>(0);

}
