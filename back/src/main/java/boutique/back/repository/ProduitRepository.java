package boutique.back.repository;

import boutique.back.model.Produit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;

@Repository
@CrossOrigin("*")
@Transactional
public interface ProduitRepository extends JpaRepository<Produit, Integer> {
}
