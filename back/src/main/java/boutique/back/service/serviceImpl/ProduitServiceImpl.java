package boutique.back.service.serviceImpl;

import boutique.back.model.Produit;
import boutique.back.repository.ProduitRepository;
import boutique.back.service.ProduitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ProduitServiceImpl implements ProduitService {

    @Autowired
    private ProduitRepository produitRepository;

    @Override
    public List<Produit> list() {
        return produitRepository.findAll();
    }

    @Override
    public Optional<Produit> listId(int id) {
        return produitRepository.findById(id);
    }

    @Override
    public Produit add(Produit produit) {
        return produitRepository.save(produit);
    }

    @Override
    public Produit edit(Produit produit) {
        return produitRepository.save(produit);
    }

    @Override
    public void deleteProduit(final int id) {
        Optional<Produit>produit = produitRepository.findById(id);
            if (produit != null){
                produitRepository.delete(produit.get());
            }
    }
}
