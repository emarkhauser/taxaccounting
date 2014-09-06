package ca.erik.taxaccounting.domain.restrepository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import ca.erik.taxaccounting.domain.model.Client;

@RepositoryRestResource(collectionResourceRel = "clients", path = "clients")
public interface ClientRepository extends
		PagingAndSortingRepository<Client, Long> {
}