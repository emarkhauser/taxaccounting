package ca.erik.taxaccounting.domain.restrepository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import ca.erik.taxaccounting.domain.model.Income;

@RepositoryRestResource(collectionResourceRel = "incomes", path = "incomes")
public interface IncomeRepository extends
		PagingAndSortingRepository<Income, Long> {
}