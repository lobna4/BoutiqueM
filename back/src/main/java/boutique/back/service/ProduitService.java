package boutique.back.service;

import boutique.back.model.Produit;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface ProduitService {

    List<Produit>list();
    Optional<Produit> listId(int id);
    Produit add(Produit produit);
    Produit edit(Produit produit);
    void deleteProduit(int id);

}
