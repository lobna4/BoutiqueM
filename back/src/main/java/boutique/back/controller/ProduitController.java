package boutique.back.controller;

import boutique.back.model.Produit;
import boutique.back.service.ProduitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*",maxAge = 3600)
@RestController
@RequestMapping({"/api/produits"})
public class ProduitController {

    @Autowired
    ProduitService service;

    @GetMapping("")
    public List<Produit> list(){
        return service.list();
    }
}
