package ca.erik.taxaccounting.domain.model;

import java.util.Calendar;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

/**
 * Domain entity for expense model
 * @author Erik Markhauser
 */
@Entity
public class Expense {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	
	private long expenseId;
	
	private Double amount;
	
	@ManyToOne(cascade = CascadeType.ALL)
	private Category category;
	
	private String note;
	private Calendar calendar;
	private String particulars;
	private Double hst;
	
	public Expense() {
		
	}
	
	public long getExpenseId() {
		return id;
	}

	public Double getAmount() {
		return amount;
	}
	
	public void setAmount(Double amount) {
		this.amount = amount;
	}
	
	public Category getCategory() {
		return category;
	}
	
	public void setCategory(Category category) {
		this.category = category;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	
	public Calendar getCalendar() {
		return calendar;
	}
	
	public void setCalendar(Calendar calendar) {
		this.calendar = calendar;
	}
	
	public String getParticulars() {
		return particulars;
	}
	
	public void setParticulars(String particulars) {
		this.particulars = particulars;
	}
	
	public Double getHst() {
		return hst;
	}
	
	public void setHst(Double hst) {
		this.hst = hst;
	}
	
}
