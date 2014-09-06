package ca.erik.taxaccounting.domain.model;

import java.util.Calendar;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.NotBlank;

/**
 * Domain model for income model
 * @author Erik Markhauser
 */
@Entity
public class Income {
	
	@Id
	@GeneratedValue
	private long id;
	
	private long incomeId;
	
	private double cashSales;
	private double salesReturns;
	private double totalSales;
	private double paymentOnAccount;
	
	@ManyToOne(cascade = CascadeType.ALL)
	private Client client;
	
	private Calendar calendar;
	
	@NotNull
	@NotBlank
	private String particulars;
	private Double hst;
	
	public Income() {
		
	}
	
	public long getIncomeId() {
		return id;
	}

	public double getCashSales() {
		return cashSales;
	}
	
	public void setCashSales(double cashSales) {
		this.cashSales = cashSales;
	}
	
	public double getSalesReturns() {
		return salesReturns;
	}
	
	public void setSalesReturns(double salesReturns) {
		this.salesReturns = salesReturns;
	}
	
	public double getTotalSales() {
		return totalSales;
	}
	
	public void setTotalSales(double totalSales) {
		this.totalSales = totalSales;
	}
	
	public double getPaymentOnAccount() {
		return paymentOnAccount;
	}
	
	public void setPaymentOnAccount(double paymentOnAccount) {
		this.paymentOnAccount = paymentOnAccount;
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
