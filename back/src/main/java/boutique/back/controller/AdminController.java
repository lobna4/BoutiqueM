package boutique.back.controller;

import boutique.back.model.Produit;
import boutique.back.model.User;
import boutique.back.service.ProduitService;
import boutique.back.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*",maxAge = 3600)
@RestController
@RequestMapping({"/api/admin"})
public class AdminController {

    @Autowired
    ProduitService service;
    @Autowired
    UserService uService;

    @PostMapping("/produit")
    public Produit add(@RequestBody Produit produit){
        return service.add(produit);
    }

    @GetMapping(path ={"/produit/{id}"})
    public Optional<Produit> listId(@PathVariable("id")int id){
        return service.listId(id);
    }

    @PutMapping(path = {"/produit/{id}"})
    public Produit edit(@RequestBody Produit produit, @PathVariable("id")int id){
        produit.setId(id);
        return service.edit(produit);
    }

    @DeleteMapping( path = {"/produit/{id}"})
    public void delete(@PathVariable int id){
        service.deleteProduit(id);
    }

    @GetMapping("/listUser")
    public List<User> userList(){
        return uService.userList();
    }

}
