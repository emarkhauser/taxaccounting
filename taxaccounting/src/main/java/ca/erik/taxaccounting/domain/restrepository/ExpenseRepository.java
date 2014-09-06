package ca.erik.taxaccounting.domain.restrepository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import ca.erik.taxaccounting.domain.model.Expense;

@RepositoryRestResource(collectionResourceRel = "expenses", path = "expenses")
public interface ExpenseRepository extends
		PagingAndSortingRepository<Expense, Long> {
}