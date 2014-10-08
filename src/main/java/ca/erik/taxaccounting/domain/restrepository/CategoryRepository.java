package ca.erik.taxaccounting.domain.restrepository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import ca.erik.taxaccounting.domain.model.Category;
import ca.erik.taxaccounting.domain.model.Expense;

@RepositoryRestResource(collectionResourceRel = "categories", path = "categories")
public interface CategoryRepository extends
		PagingAndSortingRepository<Category, Long> {
}