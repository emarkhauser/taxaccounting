package ca.erik.taxaccounting.domain.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.NotBlank;

/**
 * Domain entity for client model
 * @author Erik Markhauser
 *
 */
@Entity
public class Client {
	
	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
	private long id;
	
	private long clientId;
	
	@NotNull
	@NotBlank
	private String name;
	
	public Client () {
	}
	
	public long getClientId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	
}
