package ca.erik.taxaccounting.domain.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.NotBlank;

/**
 * Domain entity that models categories of expenses
 * @author Erik Markhauser
 *
 */
@Entity
public class Category {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	
	private long categoryId;
	
	@NotNull
	@NotBlank
	private String name;
	
	public Category() {
	}

	public Category (String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
}
